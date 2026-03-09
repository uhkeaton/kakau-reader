import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { APA, LeftQuote, Quote, RightQuote, Url } from "./Quote";

export function AboutDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <span onClick={handleClickOpen}>
        <strong className="underline hover:opacity-100 opacity-50 cursor-pointer text-sm">
          No keaha
        </strong>
      </span>
      <Dialog
        fullWidth
        maxWidth={"sm"}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll={"body"}
      >
        <DialogTitle id="alert-dialog-title">{"No Keia Mikini"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="mb-4">Aloha! Mahalo keia komo ana mai.</div>
            <div className="mb-4">
              Ua kukulu ia keia mikini i mea e kakoo ai i na hamana ke heluhelu me
              ka okina kahako ole. Me keia mikini nei hiki ke hoohuna i ka okina
              a me ke kahako. Hiki no ke heluhelu me kela kekahi.
            </div>
            <div className="mb-4">
              E hoohana ana ia ka huaolelo o <APA>kakaupii</APA> ma kahi o ka
              huaolelo o <APA>furigana</APA> ma ka olelo Kepani. Ua like no ka
              laua hana. Na’u i haku i keia huaolelo hou o <APA>kakaupii</APA>.
            </div>
            <hr className="opacity-20 pt-4 pb-2" />
            <div className="mb-4">
              Wahi a ka ACT 170 SB2491 <APA>(Iune 27, 2022)</APA> ma ka olelo
              Pelekane:
            </div>
            <div className="mb-4">
              <Quote>
                <LeftQuote />
                The legislature recognizes that Hawaiian language practitioners
                generally employ two written orthographies, namely unmarked
                language and marked language. The unmarked orthography was the
                first writing system of Hawaiian language. The marked
                orthography, which includes the kahakō and ʻokina, was created
                as a means to help learners of Hawaiian language determine when
                to elongate a vowel or where to insert a glottal stop. The
                intent of this measure is not to claim the superiority of one
                version of orthography over the other, or to invalidate
                communities with an unbroken lineage of Hawaiian speakers who do
                not follow contemporary Hawaiian writing or structures, as
                communities such as these are vital to Native Hawaiian culture
                and the State as a whole. Rather, the intent of this measure is
                to establish a standard for the spelling and punctuation of
                Hawaiian names and words when they appear in letterhead created
                by state and county agencies for the purposes of consistency and
                uniformity. Furthermore, this Act is intended to provide equal
                support and standing for both native speakers and second
                language speakers of Hawaiian language.
                <RightQuote />
                &nbsp;&mdash;&nbsp;ACT 170. (2022).
                <div className="py-2">
                  <APA>
                    <Url href="https://www.capitol.hawaii.gov/sessions/session2022/bills/GM1271_.PDF" />
                  </APA>
                </div>
              </Quote>
            </div>
            <div className="py-4">Mahalo!</div>
            <div className="py-4">na’u,</div>
            <div className="py-4">Keaton</div>
          </DialogContentText>
        </DialogContent>
        <div className="m-4">
          <DialogActions>
            {/* <Button onClick={handleClose}>Whatever</Button> */}
            <Button variant="contained" onClick={handleClose}>
              Ua Pau
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
