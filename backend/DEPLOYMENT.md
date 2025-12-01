# Ohana Live Backend Deployment Guide

## Deploy to Railway

### Prerequisites
1. Create a Railway account at https://railway.app
2. Install Railway CLI (optional): `npm install -g @railway/cli`

### Deployment Steps

#### Option 1: Deploy via GitHub (Recommended)

1. **Go to Railway Dashboard**
   - Visit https://railway.app
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your GitHub account
   - Select the `OhanaLive` repository

2. **Configure Root Directory**
   - Railway will auto-detect the project
   - Set root directory to `backend/`
   - Railway will automatically detect Django and use nixpacks

3. **Add PostgreSQL Database**
   - In your Railway project, click "New"
   - Select "Database" → "PostgreSQL"
   - Railway will automatically create a `DATABASE_URL` variable

4. **Set Environment Variables**
   Click "Variables" tab and add:
   ```
   SECRET_KEY=<generate-with-command-below>
   DEBUG=False
   ALLOWED_HOSTS=.railway.app,ohanarecovery.org
   CORS_ALLOWED_ORIGINS=https://ohanarecovery.org,https://www.ohanarecovery.org
   ```

5. **Deploy**
   - Push to GitHub main branch
   - Railway will auto-deploy
   - Get your URL: `https://your-app.railway.app`

#### Option 2: Deploy via Railway CLI

```bash
# From the backend directory
cd backend

# Login to Railway
railway login

# Initialize project
railway init

# Link to Railway project
railway link

# Add PostgreSQL
railway add postgresql

# Deploy
railway up
```

### Generate SECRET_KEY

```bash
python3 -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'
```

### Post-Deployment

1. **Run Migrations** (automatic via `release` in Procfile)
   ```bash
   railway run python manage.py migrate
   ```

2. **Create Superuser**
   ```bash
   railway run python manage.py createsuperuser
   ```

3. **Test API**
   ```bash
   curl https://your-app.railway.app/api/auth/register/ \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","public_handle":"testuser","password":"TestPass123!","password_confirm":"TestPass123!"}'
   ```

### Custom Domain (Optional)

1. In Railway project settings → Domains
2. Add custom domain: `api.ohanarecovery.org`
3. Add DNS records to your domain:
   - CNAME: `api` → `your-app.railway.app`
4. Update `ALLOWED_HOSTS` and `CORS_ALLOWED_ORIGINS` with new domain

### Environment Variables Reference

| Variable | Required | Example |
|----------|----------|---------|
| DATABASE_URL | Auto | (Railway provides) |
| SECRET_KEY | Yes | Random 50+ char string |
| DEBUG | Yes | False |
| ALLOWED_HOSTS | Yes | .railway.app,ohanarecovery.org |
| CORS_ALLOWED_ORIGINS | Yes | https://ohanarecovery.org |

### Monitoring

- **Logs**: Railway Dashboard → Deployments → View Logs
- **Metrics**: Railway Dashboard → Metrics
- **Database**: Railway Dashboard → PostgreSQL → Connect

### Troubleshooting

**Build fails:**
- Check `nixpacks.toml` is configured correctly
- Verify `requirements.txt` has no conflicts
- Check Railway build logs

**Database errors:**
- Ensure PostgreSQL is added to project
- Verify `DATABASE_URL` is set
- Run migrations: `railway run python manage.py migrate`

**Static files not loading:**
- Verify `whitenoise` is in MIDDLEWARE
- Check `collectstatic` ran during build
- See nixpacks.toml build phase

**CORS errors:**
- Update `CORS_ALLOWED_ORIGINS` with frontend URL
- Include https:// protocol
- No trailing slashes
