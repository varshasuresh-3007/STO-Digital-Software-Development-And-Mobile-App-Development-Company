import PDFKit
import AppKit

let arguments = CommandLine.arguments
if arguments.count < 3 {
    print("Usage: swift convert_pdf.swift <pdf_path> <png_path>")
    exit(1)
}

let pdfPath = arguments[1]
let pngPath = arguments[2]

let pdfURL = URL(fileURLWithPath: pdfPath)
guard let document = PDFDocument(url: pdfURL) else {
    print("Error: Could not load PDF document at \(pdfPath)")
    exit(1)
}

guard document.pageCount > 0, let page = document.page(at: 0) else {
    print("Error: PDF has no pages")
    exit(1)
}

let bounds = page.bounds(for: .mediaBox)
// Use a large scale (e.g. 4.0) to get high resolution and crispness
let scale: CGFloat = 4.0
let size = CGSize(width: bounds.width * scale, height: bounds.height * scale)
let thumbnail = page.thumbnail(of: size, for: .mediaBox)

if let tiffData = thumbnail.tiffRepresentation,
   let bitmap = NSBitmapImageRep(data: tiffData),
   let pngData = bitmap.representation(using: .png, properties: [:]) {
    do {
        try pngData.write(to: URL(fileURLWithPath: pngPath))
        print("Successfully saved crisp PNG to \(pngPath) with size \(size.width)x\(size.height)")
    } catch {
        print("Error writing PNG to disk: \(error)")
        exit(1)
    }
} else {
    print("Error: Failed to generate PNG representation from NSImage")
    exit(1)
}
