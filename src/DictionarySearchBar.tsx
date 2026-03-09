import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { IconSearch } from "./material/IconSearch";
import { useGlobal } from "./useGlobal";

export function DictionarySearchBar() {
  const { query, setQuery, setIsSplitView } = useGlobal();
  return (
    <Paper
      elevation={2}
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        borderRadius: 20,
      }}
    >
      <IconButton
        onClick={() => {
          setIsSplitView("dictionary");
        }}
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <IconSearch className="w-6" />
        {/* <SearchIcon /> */}
      </IconButton>
      <InputBase
        value={query}
        onChange={(e) => {
          setIsSplitView("dictionary");
          setQuery(e.target.value);
        }}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Huli"
        inputProps={{ "aria-label": "Huli" }}
      />

      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
    </Paper>
  );
}
