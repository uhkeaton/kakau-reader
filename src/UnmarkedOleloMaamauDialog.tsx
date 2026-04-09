import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Section } from "./UnmarkedSettingsDrawer";
import {
  closedClassNoCollisionsLower,
  namesUpper,
  numbersLower,
  openClassOkinaLevelOneLower,
  openClassVowelLevelOneLower,
} from "./unmarked.hawaiian";
import { Title } from "./Title";

export function UnmarkedOleloMaamauDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const length =
    openClassOkinaLevelOneLower.length +
    openClassVowelLevelOneLower.length +
    numbersLower.length +
    namesUpper.length;

  return (
    <React.Fragment>
      <div className="my-2" onClick={handleClickOpen}>
        <span className="underline hover:opacity-100 opacity-50 cursor-pointer font-semibold text-lg">
          + {length} Olelo Maamau
        </span>
      </div>
      <Dialog
        fullWidth
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll={"body"}
      >
        <DialogTitle id="alert-dialog-title">
          <Title>{"No ka Olelo Maamau"}</Title>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <Section
                title="Okina"
                ids={["openClassLevelOne"]}
                items={openClassOkinaLevelOneLower}
                disableSelect
              />
              <Section
                title="Kahako"
                ids={["openClassLevelOne"]}
                items={openClassVowelLevelOneLower}
                disableSelect
              />
              <Section
                title="Helu"
                ids={["openClassLevelOne"]}
                items={numbersLower}
                disableSelect
              />
              <Section
                title="Inoa"
                ids={["openClassLevelOne"]}
                items={namesUpper}
                disableSelect
              />
              <Section
                title="Maamau"
                ids={["closedClassNoCollisions"]}
                items={closedClassNoCollisionsLower}
                disableSelect
              />
              <div></div>
            </div>
          </DialogContentText>
        </DialogContent>
        <div className="m-4">
          <DialogActions>
            <Button variant="contained" onClick={handleClose}>
              Ua Pau
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
