type Story = {
  title: string;
  text: string;
};

type Group = {
  title: string;
  stories: Story[];
};

// idk tā ketahi o laua
// idk ‘O kā kēia kaikamahine ho‘i - Kamehameha Nui p.44 (kā tia tomo o Pinao)
// idk nuku
// idk minoʻaka

export const storyGroups: Group[] = [
  {
    title: "Mary Pukui (1933)",
    stories: [
      {
        title: "Ka U‘i Palaualelo",
        text: `I kekahi lā ua hele aku nei kekahi mau kaikamāhine i ka ‘eli ‘uwala. A pau ka ‘eli ‘ana, ua lawe aku nei lāua i nā ‘uwala a lāua malalo o ke kumu pūhala e pūlehu ai. Mahope o ka ‘ā ‘ana o kā lāua mau ahi, ua ‘ō‘ili mai ka ipo a kekahi o lāua. I ia manawa pi‘i aku nei lāua iluna o ke kumu pūhala e ho‘oipoipo ai.

I kēlā a me kēia manawa ua kāhea ke kaikamāhine i luna o ka pūhala i ko lalo kaikamāhine, “‘Ea, e ho‘ohulihuli a‘e ‘oe i ku‘u ‘uwala.” “‘Ae,” wahi a ke kaikamāhine malalo, a ho‘ohuli a‘e nei i kāna ‘uwala pono‘ī me ka nānā ‘ole i kā kekahi o lāua. A mo‘a kekahi ‘uwala pau nō i ka ‘ai ‘ia eia, a pūlehu hou nō i ‘uwala nāna. Kāhea hou nō ke kaikamāhine o luna, “E ho‘ohuli a‘e ‘oe i ku‘u ‘uwala.” Pane nō ke kaikamāhine e pūlehu ‘uwala ana, “‘Ae.” Hele iho nei a pau kā ianei ‘uwala, ‘o ko ianei hele nō ia i ka ‘au‘au kai.

Noho iho nei ke kaikamāhine o luna o ka pūhala a hā‘upu i kāna ‘uwala, kāhea hou nō, “Eia nei, e ho‘ohuli mai ho‘i ‘oe i ku‘u ‘uwala.” ‘A‘ohe pane i loa‘a aku iāia. Kāhea hou a‘enei me ka leo nui, “E ho‘ohuli a‘e ho‘i ‘oe i ku‘u ‘uwala!” ‘A‘ohe nō he pane. ‘O ko lāua iho maila nō ia ilalo.

Ua pau ka ‘uwala a kekahi kaikamāhine, ua mo‘a a ua pau i ka ‘ai. ‘O kā kēia kaikamāhine ho‘i, ua pāpa‘a ka ‘uwala i kapuahi a ‘o ka nui ‘uwala e maka ana nō. Ua pi‘i kona huhū i kona hoa a i ka ho‘i ‘ana mai o kēlā kaikamāhine mai ka ‘au‘au kai mai, ua noke akula ‘o ia i ka nuku.

Me ka mino‘aka i pane ‘ia mai ai ‘oia, “‘A‘ohe u‘i palaualelo o Ka‘ū.” A me kēia mau hua ‘ōlelo ua kū akula ‘oia a hele me ka ipo a kona hoa. Ua ‘ike kēlā kanaka inā ‘o ka u‘i palaualelo kāna wahine e pāpa‘a ana ka ‘uwala i kapuahi.
`,
      },
      {
        title: "Ta U‘i Palaualelo (Niihau)",
        text: `I ketahi lā ua hele aku nei ketahi mau keitamāhine i ta ‘eli ‘uwala. A pau ta ‘eli ‘ana, ua lawe aku nei lāua i nā ‘uwala a lāua malalo o ka tumu pūhala e pūlehu ai. Mahope o ta ‘ā ‘ana o tā lāua mau ahi, ua ‘ō‘ili mai ta ipo a ketahi o lāua. I ia manawa pi‘i aku nei lāua iluna o ka tumu pūhala e ho‘oipoipo ai.

I tēlā a me tēia manawa ua tāhea ta keitamāhine i luna o ta pūhala i to lalo keitamāhine, “‘Ea, e ho‘ohulihuli a‘e ‘oe i tu‘u ‘uwala.” “‘Ae,” wahi a ta keitamāhine malalo, a ho‘ohuli a‘e nei i tāna ‘uwala pono‘ī me ta nānā ‘ole i tā ketahi o lāua. A mo‘a ketahi ‘uwala pau nō i ta ‘ai ‘ia eia, a pūlehu hou nō i ‘uwala nāna. Tāhea hou nō ta keitamāhine o luna, “E ho‘ohuli a‘e ‘oe i tu‘u ‘uwala.” Pane nō ta keitamāhine e pūlehu ‘uwala ana, “‘Ae.” Hele iho nei a pau tā ianei ‘uwala, ‘o to ianei hele nō ia i ta ‘au‘au tai.

Noho iho nei ta keitamāhine o luna o ta pūhala a hā‘upu i tāna ‘uwala, tāhea hou nō, “Eia nei, e ho‘ohuli mai ho‘i ‘oe i tu‘u ‘uwala.” ‘A‘ohe pane i loa‘a aku iāia. Tāhea hou a‘enei me ta leo nui, “E ho‘ohuli a‘e ho‘i ‘oe i tu‘u ‘uwala!” ‘A‘ohe nō he pane. ‘O to lāua iho maila nō ia ilalo.

Ua pau ta ‘uwala a ketahi keitamāhine, ua mo‘a a ua pau i ta ‘ai. ‘O kā tēia keitamāhine ho‘i, ua pāpa‘a ta ‘uwala i tapuahi a ‘o ta nui ‘uwala e mata ana nō. Ua pi‘i tona huhū i tona hoa a i ta ho‘i ‘ana mai o tēlā keitamāhine mai ta ‘au‘au tai mai, ua noke akula ‘o ia i ta nuku.

Me ta mino‘aka i pane ‘ia mai ai ‘oia, “‘A‘ohe u‘i palaualelo o Ka‘ū.” A me tēia mau hua ‘ōlelo ua tū akula ‘oia a hele me ta ipo a tona hoa. Ua ‘ite tēlā kanaka inā ‘o ta u‘i palaualelo tāna wahine e pāpa‘a ana ta ‘uwala i tapuahi.`,
      },
    ],
  },
  {
    title: "Papa Olelo",
    stories: [
      {
        title: "No Ke Kino",
        text: `poʻo
lauoho
iwi poʻo
lae
maka
ihu
puka ihu
waha
lehelehe
alelo
helehelena
papālina
pepeiao
kuʻemaka 
lihilihi
niho
ʻauwae
maha
puʻu
ʻumiʻumi
lolo`,
        // no The Hawaiian Language (1939)
      },
    ],
  },
] as const;

export function isAStory(str: string) {
  const flatStories = storyGroups
    .map((group) => group.stories.map((story) => story.text))
    .flat();
  return flatStories.includes(str);
}
