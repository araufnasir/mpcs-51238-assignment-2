/** writtenBy is left out where sources disagree. */
export type Track = { number: string; title: string; single: boolean; writtenBy?: string };

/** The nine tracks of Thriller, in album order. */
export const tracks: Track[] = [
  { number: "01", title: "Wanna Be Startin' Somethin'", single: true },
  { number: "02", title: "Baby Be Mine", single: false, writtenBy: "Rod Temperton" },
  { number: "03", title: "The Girl Is Mine", single: true, writtenBy: "Michael Jackson" },
  { number: "04", title: "Thriller", single: true, writtenBy: "Rod Temperton" },
  { number: "05", title: "Beat It", single: true, writtenBy: "Michael Jackson" },
  { number: "06", title: "Billie Jean", single: true, writtenBy: "Michael Jackson" },
  { number: "07", title: "Human Nature", single: true, writtenBy: "Steve Porcaro and John Bettis" },
  { number: "08", title: "P.Y.T. (Pretty Young Thing)", single: true, writtenBy: "James Ingram and Quincy Jones" },
  { number: "09", title: "The Lady in My Life", single: false },
];
