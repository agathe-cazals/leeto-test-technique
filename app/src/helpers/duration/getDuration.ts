export default function getDuration(openingDate: string | Date, closingDate: string | Date): string {
    const startDate = typeof openingDate === "string" ? new Date(openingDate) : openingDate;
    const endDate = typeof closingDate === "string" ? new Date(closingDate) : closingDate;
  
    // Calcul du nombre de jours
    const msPerDay = 1000 * 60 * 60 * 24;
    const differenceInMs = endDate.getTime() - startDate.getTime();
    const differenceInDays = Math.round(differenceInMs / msPerDay);
  
    if (differenceInDays < 0) {
        return "date invalide";
      }
    
    if (differenceInDays === 7) {
      return "une semaine";
    }
  
    return `${differenceInDays} jour${differenceInDays > 1 ? "s" : ""}`;
  }