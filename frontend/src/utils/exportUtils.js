import html2canvas from "html2canvas";

export const downloadChartAsPNG = async (elementId, fileName = "chart") => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error("Element not found");
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#1f2937",
    });

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `${fileName}-${Date.now()}.png`;
    link.click();

    return true;
  } catch (error) {
    console.error("Error downloading chart:", error);
    throw error;
  }
};

export const downloadAllChartsAsZip = async (chartElements) => {
  // Note: This would require a zip library like jszip
  // For now, we'll just download them individually
  for (const { id, name } of chartElements) {
    await downloadChartAsPNG(id, name);
    // Add a small delay between downloads
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
};

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Error copying to clipboard:", error);
    return false;
  }
};

export const formatNumber = (value) => {
  if (typeof value !== "number") return value;
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }).format(value);
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
};
