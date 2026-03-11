type Story = {
  title: string;
  text: string;
};

type Group = {
  title: string;
  stories: Story[];
};

// idk tā ketahi o laua
// idk ʻO kā kēia kaikamahine hoʻi - Kamehameha Nui p.44 (kā tia tomo o Pinao)
// idk nuku
// idk minoʻaka

export const storyGroups: Group[] = [
  {
    title: "Mary Pukui (1933)",
    stories: [
      {
        title: "Ka Uʻi Palaualelo",
        text: `I kekahi lā ua hele aku nei kekahi mau kaikamāhine i ka ʻeli ʻuwala. A pau ka ʻeli ʻana, ua lawe aku nei lāua i nā ʻuwala a lāua malalo o ke kumu pūhala e pūlehu ai. Mahope o ka ʻā ʻana o kā lāua mau ahi, ua ʻōʻili mai ka ipo a kekahi o lāua. I ia manawa piʻi aku nei lāua iluna o ke kumu pūhala e hoʻoipoipo ai.

I kēlā a me kēia manawa ua kāhea ke kaikamāhine i luna o ka pūhala i ko lalo kaikamāhine, “ʻEa, e hoʻohulihuli aʻe ʻoe i kuʻu ʻuwala.” “ʻAe,” wahi a ke kaikamāhine malalo, a hoʻohuli aʻe nei i kāna ʻuwala ponoʻī me ka nānā ʻole i kā kekahi o lāua. A moʻa kekahi ʻuwala pau nō i ka ʻai ʻia eia, a pūlehu hou nō i ʻuwala nāna. Kāhea hou nō ke kaikamāhine o luna, “E hoʻohuli aʻe ʻoe i kuʻu ʻuwala.” Pane nō ke kaikamāhine e pūlehu ʻuwala ana, “ʻAe.” Hele iho nei a pau kā ianei ʻuwala, ʻo ko ianei hele nō ia i ka ʻauʻau kai.

Noho iho nei ke kaikamāhine o luna o ka pūhala a hāʻupu i kāna ʻuwala, kāhea hou nō, “Eia nei, e hoʻohuli mai hoʻi ʻoe i kuʻu ʻuwala.” ʻAʻohe pane i loaʻa aku iāia. Kāhea hou aʻenei me ka leo nui, “E hoʻohuli aʻe hoʻi ʻoe i kuʻu ʻuwala!” ʻAʻohe nō he pane. ʻO ko lāua iho maila nō ia ilalo.

Ua pau ka ʻuwala a kekahi kaikamāhine, ua moʻa a ua pau i ka ʻai. ʻO kā kēia kaikamāhine hoʻi, ua pāpaʻa ka ʻuwala i kapuahi a ʻo ka nui ʻuwala e maka ana nō. Ua piʻi kona huhū i kona hoa a i ka hoʻi ʻana mai o kēlā kaikamāhine mai ka ʻauʻau kai mai, ua noke akula ʻo ia i ka nuku.

Me ka minoʻaka i pane ʻia mai ai ʻoia, “ʻAʻohe uʻi palaualelo o Kaʻū.” A me kēia mau hua ʻōlelo ua kū akula ʻoia a hele me ka ipo a kona hoa. Ua ʻike kēlā kanaka inā ʻo ka uʻi palaualelo kāna wahine e pāpaʻa ana ka ʻuwala i kapuahi.
`,
      },
      {
        title: "Ta Uʻi Palaualelo (Niihau)",
        text: `I ketahi lā ua hele aku nei ketahi mau keitamāhine i ta ʻeli ʻuwala. A pau ta ʻeli ʻana, ua lawe aku nei lāua i nā ʻuwala a lāua malalo o ka tumu pūhala e pūlehu ai. Mahope o ta ʻā ʻana o tā lāua mau ahi, ua ʻōʻili mai ta ipo a ketahi o lāua. I ia manawa piʻi aku nei lāua iluna o ka tumu pūhala e hoʻoipoipo ai.

I tēlā a me tēia manawa ua tāhea ta keitamāhine i luna o ta pūhala i to lalo keitamāhine, “ʻEa, e hoʻohulihuli aʻe ʻoe i tuʻu ʻuwala.” “ʻAe,” wahi a ta keitamāhine malalo, a hoʻohuli aʻe nei i tāna ʻuwala ponoʻī me ta nānā ʻole i tā ketahi o lāua. A moʻa ketahi ʻuwala pau nō i ta ʻai ʻia eia, a pūlehu hou nō i ʻuwala nāna. Tāhea hou nō ta keitamāhine o luna, “E hoʻohuli aʻe ʻoe i tuʻu ʻuwala.” Pane nō ta keitamāhine e pūlehu ʻuwala ana, “ʻAe.” Hele iho nei a pau tā ianei ʻuwala, ʻo to ianei hele nō ia i ta ʻauʻau tai.

Noho iho nei ta keitamāhine o luna o ta pūhala a hāʻupu i tāna ʻuwala, tāhea hou nō, “Eia nei, e hoʻohuli mai hoʻi ʻoe i tuʻu ʻuwala.” ʻAʻohe pane i loaʻa aku iāia. Tāhea hou aʻenei me ta leo nui, “E hoʻohuli aʻe hoʻi ʻoe i tuʻu ʻuwala!” ʻAʻohe nō he pane. ʻO to lāua iho maila nō ia ilalo.

Ua pau ta ʻuwala a ketahi keitamāhine, ua moʻa a ua pau i ta ʻai. ʻO kā tēia keitamāhine hoʻi, ua pāpaʻa ta ʻuwala i tapuahi a ʻo ta nui ʻuwala e mata ana nō. Ua piʻi tona huhū i tona hoa a i ta hoʻi ʻana mai o tēlā keitamāhine mai ta ʻauʻau tai mai, ua noke akula ʻo ia i ta nuku.

Me ta minoʻaka i pane ʻia mai ai ʻoia, “ʻAʻohe uʻi palaualelo o Kaʻū.” A me tēia mau hua ʻōlelo ua tū akula ʻoia a hele me ta ipo a tona hoa. Ua ʻite tēlā kanaka inā ʻo ta uʻi palaualelo tāna wahine e pāpaʻa ana ta ʻuwala i tapuahi.`,
      },
      {
        title: "Ka Hiku o nā Ahupuaʻa",
        text: `He moʻolelo kēia e hōʻike ana i ke kumu i mālama loa ʻia ai ka ipu ʻawaʻawa e kekahi poʻe o Kaʻū, Hawaiʻi. 

Ua ʻōlelo ʻia, he aliʻi wahine ko Kaʻū i aloha nui ʻia e kona poʻe kānaka. I ka hāpai ʻana o ua aliʻi nei, ua hiki mai ka maʻi ma luna ona, a i ke kokoke ʻana aku i ka wā e hānau ai, ua make ihola ke aliʻi wahine. Ua laweʻia kona kino iloko o ke ana. Ua ʻolokaʻa ʻia ka pōhaku nui a paʻa ka waha o ka lua.

I ka hiki ʻana mai o ka lā e hānau ai ʻo ke keiki, ua ʻōʻili mai ka muʻo mai ka piko mai o ke aliʻi make, a ulu a puka ma kekahi hakahaka ʻuʻuku ma ka ʻaoʻao o ka pani o ka lua, a kolo aku nei no kahi mamao loa aku. I kekahi kakahiaka ua ʻike akula ke aliʻi o ka hiku o ka ahupuaʻa, i kolo ʻia e ka ipu ʻawaʻawa, i ka ulu maikaʻi mai mahope aku o kona hale. Ua mālama ʻia e ia a hiki i ka pua ʻana, a hua. I ka oʻo ʻana iho, ua hele mau ʻoia i nā lā a pau e kīkēkē, e ʻiniki, e nānā ai inā i oʻo maikaʻi e kahakaha ʻia ai. ʻAʻole i ʻike kēia aliʻi he ipu ʻawaʻawa kanaka kēia.

Ua hoʻi ka ʻuhane o kēia ipu ʻawaʻawa iluna o kekahi haka a hōʻike aku nei i kona ʻiniki ʻia, a ua nui ka ʻeha. Kiʻi ʻia ke kahuna o kēlā wahi a ua hōʻike ʻia iāia e ka ipu ʻawaʻawa i nā mea i hanaʻia maluna o kona kino, me ke kauoha pū aku iāia e ʻimi a loaʻa ʻoia a hoʻihoʻi mai. Ua iho ke kahuna a ka lua pao, a malaila ʻoia i hoʻokolo ai ma ke kā o ka ipu ʻawaʻawa, a hiki i ka hiku o nā ahupuaʻa. I ka ʻike ʻana o ke aliʻi iāia ma kahi o ka ipu ʻawaʻawa nīnau maila ʻoia no ke aha ʻoia nei i hiki aku ai. Hōʻike aku nei ua kahuna nei i ka hōʻike a kona haku iāia. Ua piha ke aliʻi i ka minamina i kona nānā ʻana iho i ka maikaʻi o ka ipu ʻawaʻawa, a hōʻole aku nei i ka manaʻo o ke kahuna. Ua lilo ihola kēia i kumu e hoʻopaʻapaʻa ai no lāua a hiki i ka ʻōlelo ʻana aku o ke kahuna e hele lāua a ʻike pono ʻowai ka i kuleana ʻiʻo i ua ipu ʻawaʻawa lā, ʻo ke kumu mai, no ka hilinaʻi ʻole o ke aliʻi he kanaka nō kēia ipu ʻawaʻawa. I ka ʻae ʻana o ke aliʻi, ua hele lāua e ʻike i kahi i kupu aʻe ai ʻo ua ipu ʻawaʻawa lā. Ua hele lāua ma ka ʻaoʻao o ke kā a hiki i ka lua pao, a komo aku nei iloko. Ua ʻike like aku nei nō lāua i kahi i ulu mai ai ʻo ka ipu ʻawaʻawa, mai ka ʻōpū mai o ke aliʻi make.

Ua hoʻihoʻi ʻia mai ka ipu ʻawaʻawa e ke kahuna a mālama ʻia me ka punahele loa a hiki i ka make ʻana o ua kahuna nei. Mahope mai o ia manawa, ʻaʻole i maopopo he aha lā ka mea i hana ʻia no kēlā ipu ʻawaʻawa. No ka ʻohana o kēlā wahine aliʻi i make ai, ua lilo loa ka ipu ʻawaʻawa i mea nui iā lākou. Ke nahā kā lākou ipu ʻawaʻawa, na kanu ʻia me ka maikaʻi, a i ʻole, ua puhi ʻia i ke ahi i ʻole e kāpulu ʻia. Ke nīnau ʻia aku ke kumu o lākou i kiloi wale ʻole ai i nā ʻāpaʻapana o kā lākou ipu ʻawaʻawa, hoʻokahi nō pane e loaʻa mai, “No ka hiku o nā ahupuaʻa.”

`,
      },
      {
        title: "Nā Makapō o Moaʻula",
        text: `No Moaʻula, Kaʻū, kekahi mau kānaka makapō. Hoʻokahi kanaka ua makapō loa, a ʻo kekahi hoʻi, ua hiki nō ke ʻike iki, i nā mea wale nō i kokoke loa i kona alo. Ua kūkā iho nei lāua e iho i Punaluʻu i kekahi lā, a na ke kanaka ʻike iki e alakaʻi i kona hoa makapō loa. Ua iho mālie aku nei lāua a hiki ma ke kapa o Punaluʻu kahawai. Nīnau aku nei ka mea makapō loa i kona hoa, “Pehea, he wai anei ko lalo?”  Pane maila kona hoa,  “ʻAe, he wai.” — “Nui anei ka wai?” — “ʻAe, nui ka wai o lalo.” — “A laila e lēkei aku kāua a ʻau aku no kēlā ʻaoʻao ma ʻō.” — “ʻAe, e lēkei aʻe kāua.” Ua lēkei akula lāua i lalo, a hakihaki nā wāwae. He wai nō ko lalo, ʻaʻole naʻe he nui.

Aʻole nō kēia ka mea i pau ai ʻo ko lāua hele ʻana. I kekahi lā hele hou nō ua mau makapō nei i Punaluʻu, kahawai mauka naʻe lāua i hele ai i kēia hanana. I ka hiki ʻana ma kahawai ua nīnau aku ka makapō mua i kona alakaʻi, “Pehea kāu ʻike ʻana? Ua ʻuʻuku anei ka wai?” — “ʻAe ʻuʻuku loa.” — “He mea ʻoiaʻiʻo anei kēnā, ʻaʻohe wai o lalo?” — “He ʻoiaʻiʻo, ʻaʻohe wai.” — “E hele hoʻi hā kāua ilalo a hele wāwae aku ma ʻō.” —  A ua iho aku nei lāua ilalo.

O ka mea a lāua i ʻike ai ua piha ke kahawai i ka wai a lilo lāua. Ua ʻike ʻia lāua e kūpaka ana iloko o ka wai a kiʻi ʻia mai a hoʻihoʻi ʻia iuka. Pau loa nō ko lāua makemake ʻana e hele hou ma Punaluʻu me ka hele pū ʻole me ka poʻe maka ʻike.

`,
      },
    ],
  },
  //   {
  //     title: "Papa Olelo",
  //     stories: [
  //       {
  //         title: "No Ke Kino",
  //         text: `poʻo
  // lauoho
  // iwi poʻo
  // lae
  // maka
  // ihu
  // puka ihu
  // waha
  // lehelehe
  // alelo
  // helehelena
  // papālina
  // pepeiao
  // kuʻemaka
  // lihilihi
  // niho
  // ʻauwae
  // maha
  // puʻu
  // ʻumiʻumi
  // lolo`,
  //         // no The Hawaiian Language (1939)
  //       },
  //     ],
  //   },
] as const;

export function isAStory(str: string) {
  const flatStories = storyGroups
    .map((group) => group.stories.map((story) => story.text))
    .flat();
  return flatStories.includes(str);
}
