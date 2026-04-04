import {
  FormControl,
  InputLabel,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { useGlobal } from "./useGlobal";
import { label } from "./labels";

type SelectGroup = {
  title: string;
  stories: {
    id: string;
    title: string;
    paragraphs: { text: string }[];
  }[];
};

// https://mui.com/material-ui/react-select/
export function StorySelect() {
  const { text, setText, setIsEditing, orthography, collectionsQuery } =
    useGlobal();

  const handleChange = (event: SelectChangeEvent) => {
    const val = event.target.value;
    if (!val) setIsEditing(true);
    else setIsEditing(false);
    setText(val as string);
  };

  const storyGroups: SelectGroup[] = (
    collectionsQuery?.data?.collections || []
  ).map((item) => {
    return {
      id: item.id,
      title: item.title,
      stories: item.stories.map((s) => {
        return { id: s.id, title: s.title, paragraphs: s.paragraphs };
      }),
    };
  });

  return (
    <div className="w-full sm:w-fit">
      <FormControl sx={{ minWidth: 120, width: "100%" }}>
        <InputLabel htmlFor="grouped-native-select">
          {label(orthography, "Moolelo")}
        </InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          value={text}
          onChange={handleChange}
          label="Grouping"
        >
          <option aria-label="None" value="" />
          {storyGroups.map((group) => {
            return (
              <optgroup label={group.title}>
                {group.stories.map((story) => {
                  return <option value={story.id}>{story.title}</option>;
                })}
              </optgroup>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
