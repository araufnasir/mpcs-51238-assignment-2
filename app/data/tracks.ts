/** writtenBy and summary are left out wherever a source disagrees or we are not sure. */
export type Track = { number: string; title: string; single: boolean; writtenBy?: string; summary?: string };

/** The nine tracks of Thriller, in album order. */
export const tracks: Track[] = [
  { number: "01", title: "Wanna Be Startin' Somethin'", single: true, summary: "An energetic opener that pushes back against gossip and the pressure of constant talk." },
  { number: "02", title: "Baby Be Mine", single: false, writtenBy: "Rod Temperton", summary: "A bright, brass-driven love song: upbeat, swinging and made for dancing." },
  { number: "03", title: "The Girl Is Mine", single: true, writtenBy: "Michael Jackson", summary: "A friendly, slightly cheeky duet with Paul McCartney about two friends who want the same woman." },
  { number: "04", title: "Thriller", single: true, writtenBy: "Rod Temperton", summary: "A playful horror-movie fantasy about a night full of monsters, with a spoken part by Vincent Price." },
  { number: "05", title: "Beat It", single: true, writtenBy: "Michael Jackson", summary: "A rock-edged song with a guitar solo by Eddie Van Halen, about walking away from a fight instead of proving yourself." },
  { number: "06", title: "Billie Jean", single: true, writtenBy: "Michael Jackson", summary: "A tense, bass-led song about a man refusing to accept a stranger's claim about him." },
  { number: "07", title: "Human Nature", single: true, writtenBy: "Steve Porcaro and John Bettis", summary: "A mellow, dreamy song with a city-at-night feel, about being drawn to someone." },
  { number: "08", title: "P.Y.T. (Pretty Young Thing)", single: true, writtenBy: "James Ingram and Quincy Jones", summary: "An upbeat, flirtatious dance track about attraction and playful romance." },
  { number: "09", title: "The Lady in My Life", single: false, summary: "A slow, soulful love ballad that closes the album." },
];
