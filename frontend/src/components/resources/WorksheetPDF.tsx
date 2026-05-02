import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer"
import type { Worksheet } from "@/lib/worksheets"

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 20,
    borderBottom: "3 solid #14B8A6",
    paddingBottom: 15,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#14B8A6",
    marginBottom: 5,
  },
  tagline: {
    fontSize: 10,
    color: "#666666",
    fontStyle: "italic",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 11,
    color: "#4a4a4a",
    marginBottom: 15,
    lineHeight: 1.5,
  },
  metadata: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 15,
  },
  metadataItem: {
    fontSize: 9,
    color: "#666666",
  },
  metadataLabel: {
    fontWeight: "bold",
    color: "#14B8A6",
  },
  divider: {
    borderBottom: "1 solid #e5e5e5",
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#14B8A6",
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  promptContainer: {
    marginBottom: 20,
  },
  promptNumber: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#14B8A6",
    marginBottom: 5,
  },
  promptText: {
    fontSize: 11,
    color: "#2a2a2a",
    marginBottom: 8,
    lineHeight: 1.4,
  },
  responseArea: {
    borderBottom: "1 solid #d1d5db",
    paddingBottom: 30,
    marginBottom: 5,
  },
  responseText: {
    fontSize: 10,
    color: "#4a4a4a",
    lineHeight: 1.6,
    paddingTop: 5,
  },
  notesSection: {
    marginTop: 25,
    padding: 15,
    backgroundColor: "#f9fafb",
    borderRadius: 4,
  },
  notesTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#2a2a2a",
    marginBottom: 10,
  },
  notesLines: {
    borderBottom: "1 solid #d1d5db",
    marginBottom: 8,
    paddingBottom: 15,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    borderTop: "2 solid #14B8A6",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    fontSize: 9,
    color: "#666666",
  },
  footerBold: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#14B8A6",
  },
  pageNumber: {
    fontSize: 9,
    color: "#666666",
  },
  completionSection: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#f0fdfa",
    border: "1 solid #14B8A6",
    borderRadius: 4,
  },
  completionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  completionLabel: {
    fontSize: 10,
    color: "#2a2a2a",
  },
  completionValue: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#14B8A6",
    borderBottom: "1 solid #14B8A6",
    paddingHorizontal: 20,
  },
})

interface WorksheetPDFProps {
  worksheet: Worksheet
  responses?: Record<string, string>
  completedAt?: string
}

export default function WorksheetPDF({
  worksheet,
  responses,
  completedAt,
}: WorksheetPDFProps) {
  const isBlank = !responses || Object.keys(responses).length === 0

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header with branding */}
        <View style={styles.header}>
          <Text style={styles.logoText}>Ohana Live</Text>
          <Text style={styles.tagline}>&quot;Nobody gets left behind.&quot;</Text>
        </View>

        {/* Worksheet title and description */}
        <Text style={styles.title}>{worksheet.title}</Text>
        <Text style={styles.description}>{worksheet.description}</Text>

        {/* Metadata row */}
        <View style={styles.metadata}>
          <Text style={styles.metadataItem}>
            <Text style={styles.metadataLabel}>Category: </Text>
            {worksheet.category}
          </Text>
          <Text style={styles.metadataItem}>
            <Text style={styles.metadataLabel}>Time: </Text>
            {worksheet.timeEstimate}
          </Text>
          <Text style={styles.metadataItem}>
            <Text style={styles.metadataLabel}>Level: </Text>
            {worksheet.difficulty}
          </Text>
        </View>

        <View style={styles.divider} />

        {/* Worksheet prompts */}
        <Text style={styles.sectionTitle}>Worksheet</Text>

        {worksheet.preview.map((prompt, index) => (
          <View key={index} style={styles.promptContainer}>
            <Text style={styles.promptNumber}>{index + 1}.</Text>
            <Text style={styles.promptText}>{prompt}</Text>
            {isBlank ? (
              <>
                <View style={styles.responseArea} />
                <View style={styles.responseArea} />
              </>
            ) : (
              <Text style={styles.responseText}>
                {responses?.[index] || "(No response provided)"}
              </Text>
            )}
          </View>
        ))}

        {/* Notes section */}
        {isBlank && (
          <View style={styles.notesSection}>
            <Text style={styles.notesTitle}>Additional Notes:</Text>
            <View style={styles.notesLines} />
            <View style={styles.notesLines} />
            <View style={styles.notesLines} />
          </View>
        )}

        {/* Completion tracking */}
        <View style={styles.completionSection}>
          <View style={styles.completionRow}>
            <Text style={styles.completionLabel}>Date Completed:</Text>
            <Text style={styles.completionValue}>
              {completedAt
                ? new Date(completedAt).toLocaleDateString()
                : "_______________"}
            </Text>
          </View>
          <View style={styles.completionRow}>
            <Text style={styles.completionLabel}>
              How I felt before (1-10):
            </Text>
            <Text style={styles.completionValue}>_____</Text>
          </View>
          <View style={styles.completionRow}>
            <Text style={styles.completionLabel}>
              How I felt after (1-10):
            </Text>
            <Text style={styles.completionValue}>_____</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View>
            <Text style={styles.footerBold}>Ohana Live</Text>
            <Text style={styles.footerText}>ohanarecovery.org</Text>
          </View>
          <Text style={styles.pageNumber}>
            {isBlank ? "Blank Worksheet" : "Completed Worksheet"}
          </Text>
        </View>
      </Page>
    </Document>
  )
}
