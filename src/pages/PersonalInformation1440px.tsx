import { FunctionComponent, useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./PersonalInformation1440px.module.css";

const PersonalInformation1440px: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContinueClick = useCallback(() => {
    navigate("/personal-verification-1440px");
  }, [navigate]);

  return (
    <div className={styles.personalInformation1440px}>
      <header className={styles.header}>
        <div className={styles.container}>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <div className={styles.menuRight}>
            <div className={styles.helpMenu}>
              <div className={styles.needAnyHelp}>Need any help?</div>
              <FormControl
                className={styles.language}
                variant="standard"
                sx={{
                  borderRadius: "0px 0px 0px 0px",
                  width: "59.7px",
                  height: "25px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "25px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "25px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "25px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "25px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary">ENG</InputLabel>
                <Select
                  color="primary"
                  id="01"
                  defaultValue="language_eng"
                  label="ENG"
                  disableUnderline
                  displayEmpty
                />
                <FormHelperText />
              </FormControl>
            </div>
            <div className={styles.userMenu}>
              <div className={styles.icons}>
                <img
                  className={styles.iconamoonsearch}
                  loading="lazy"
                  alt=""
                  src="/iconamoonsearch.svg"
                />
                <img
                  className={styles.iconamoonsearch}
                  loading="lazy"
                  alt=""
                  src="/mynauibell.svg"
                />
                <img
                  className={styles.iconamoonsearch}
                  alt=""
                  src="/mynauibell-1.svg"
                />
                <img
                  className={styles.iconamoonsearch}
                  alt=""
                  src="/mynauibell-2.svg"
                />
              </div>
              <img
                className={styles.avatarIcon}
                loading="lazy"
                alt=""
                src="/avatar@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <footer className={styles.body}>
        <div className={styles.container1}>
          <div className={styles.sidemenu}>
            <div className={styles.navigationItems}>
              <div className={styles.navigationRow}>
                <div className={styles.navigationSubrow}>
                  <img
                    className={styles.iconpersonal}
                    loading="lazy"
                    alt=""
                    src="/iconpersonal.svg"
                  />
                  <div className={styles.navigationLabels}>
                    Personal Information
                  </div>
                </div>
                <img
                  className={styles.navigationDividersIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-1388.svg"
                />
              </div>
              <img
                className={styles.navigationItemsChild}
                alt=""
                src="/group-1000001433.svg"
              />
            </div>
            <img
              className={styles.navigationItemsIcon}
              alt=""
              src="/navigation-items.svg"
            />
            <div className={styles.navigationItems1}>
              <div className={styles.navigationRow}>
                <div className={styles.navigationSubrow}>
                  <img
                    className={styles.iconpersonal}
                    loading="lazy"
                    alt=""
                    src="/iconverified.svg"
                  />
                  <div className={styles.navigationLabels}>
                    Personal Verification
                  </div>
                </div>
                <img
                  className={styles.navigationDividersIcon}
                  alt=""
                  src="/vector-1388.svg"
                />
              </div>
              <img
                className={styles.navigationItemsChild}
                alt=""
                src="/group-1000001433.svg"
              />
            </div>
            <img
              className={styles.navigationItemsIcon}
              loading="lazy"
              alt=""
              src="/navigation-items.svg"
            />
            <div className={styles.navigationItems1}>
              <div className={styles.navigationRow}>
                <div className={styles.navigationSubrow}>
                  <img
                    className={styles.iconpersonal}
                    loading="lazy"
                    alt=""
                    src="/iconbusiness.svg"
                  />
                  <div className={styles.text1}>Business Information</div>
                </div>
                <img
                  className={styles.navigationDividersIcon}
                  alt=""
                  src="/vector-1388.svg"
                />
              </div>
              <img
                className={styles.navigationItemsChild}
                alt=""
                src="/group-1000001433.svg"
              />
            </div>
            <img
              className={styles.navigationItemsIcon}
              loading="lazy"
              alt=""
              src="/navigation-items.svg"
            />
            <div className={styles.navigationItems1}>
              <div className={styles.navigationRow}>
                <div className={styles.navigationSubrow}>
                  <img
                    className={styles.iconpersonal}
                    loading="lazy"
                    alt=""
                    src="/iconbusinessowners.svg"
                  />
                  <div className={styles.navigationLabels}>Business Owners</div>
                </div>
                <img
                  className={styles.navigationDividersIcon}
                  alt=""
                  src="/vector-1388.svg"
                />
              </div>
              <img
                className={styles.navigationItemsChild}
                alt=""
                src="/group-1000001433.svg"
              />
            </div>
            <img
              className={styles.navigationItemsIcon}
              loading="lazy"
              alt=""
              src="/navigation-items.svg"
            />
            <div className={styles.navigationItems1}>
              <div className={styles.navigationRow}>
                <div className={styles.navigationSubrow}>
                  <img
                    className={styles.iconpersonal}
                    loading="lazy"
                    alt=""
                    src="/iconnames.svg"
                  />
                  <div className={styles.navigationLabels}>Business Names</div>
                </div>
                <img
                  className={styles.navigationDividersIcon}
                  alt=""
                  src="/vector-1388.svg"
                />
              </div>
              <img
                className={styles.navigationItemsChild}
                alt=""
                src="/group-1000001433.svg"
              />
            </div>
            <img
              className={styles.navigationItemsIcon}
              loading="lazy"
              alt=""
              src="/navigation-items.svg"
            />
            <div className={styles.navigationItems1}>
              <div className={styles.navigationRow}>
                <div className={styles.navigationSubrow}>
                  <img
                    className={styles.iconpersonal}
                    loading="lazy"
                    alt=""
                    src="/icontansaction.svg"
                  />
                  <div className={styles.navigationLabels}>
                    Formation Documents
                  </div>
                </div>
                <img
                  className={styles.navigationDividersIcon}
                  alt=""
                  src="/vector-1388.svg"
                />
              </div>
              <img
                className={styles.navigationItemsChild}
                alt=""
                src="/group-1000001433.svg"
              />
            </div>
            <img
              className={styles.navigationItemsIcon}
              loading="lazy"
              alt=""
              src="/navigation-items.svg"
            />
            <div className={styles.navigationItems1}>
              <div className={styles.navigationRow}>
                <div className={styles.navigationSubrow}>
                  <img
                    className={styles.iconpersonal}
                    loading="lazy"
                    alt=""
                    src="/iconein.svg"
                  />
                  <div className={styles.navigationLabels}>
                    EIN Verification
                  </div>
                </div>
                <img
                  className={styles.navigationDividersIcon}
                  alt=""
                  src="/vector-1388.svg"
                />
              </div>
              <img
                className={styles.navigationItemsChild}
                alt=""
                src="/group-1000001433.svg"
              />
            </div>
          </div>
          <form className={styles.stepBody}>
            <div className={styles.formSection}>
              <div className={styles.formTitle}>
                <div className={styles.band}>
                  <div className={styles.description}>
                    We guarantee that these information will stay confidential
                    and secured
                  </div>
                  <div className={styles.learnMore}>Learn more</div>
                </div>
                <h2 className={styles.title}>
                  We need to know a little about the person setting up the
                  business account.
                </h2>
              </div>
              <div className={styles.formTitle}>
                <div className={styles.pleaseEnterYour}>
                  Please enter your details below
                </div>
                <div className={styles.fields}>
                  <div className={styles.row1}>
                    <div className={styles.input}>
                      <input
                        className={styles.inputContainers}
                        placeholder="Chandler"
                        type="text"
                      />
                    </div>
                    <div className={styles.input}>
                      <input
                        className={styles.inputContainers}
                        placeholder="Bing"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.input}>
                      <input
                        className={styles.inputItem}
                        placeholder="Phone Number"
                        type="text"
                      />
                    </div>
                    <div className={styles.input}>
                      <input
                        className={styles.inputItem}
                        placeholder="Email Address"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={styles.row1}>
                    <FormControl
                      className={styles.select}
                      variant="outlined"
                      sx={{
                        borderRadius: "0px 0px 0px 0px",
                        width: "407.5px",
                        height: "53px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "53px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "53px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "53px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "53px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          textAlign: "left",
                          p: "0 !important",
                        },
                      }}
                    >
                      <InputLabel color="primary">Nationality</InputLabel>
                      <Select
                        color="primary"
                        name="Nationality"
                        id="01"
                        defaultValue="French"
                        label="Nationality"
                        disableUnderline
                        displayEmpty
                      />
                      <FormHelperText />
                    </FormControl>
                    <div className={styles.input4}>
                      <input
                        className={styles.inputItem}
                        placeholder="Social Security Number"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.pleaseEnterYour}>
                  Note : You must be at least 18 years old to open your own
                  account.
                </div>
              </div>
              <div className={styles.owner}>
                <div className={styles.pleaseEnterYour}>
                  Are you an owner of this business?
                </div>
                <div className={styles.toggle}>
                  <button className={styles.left}>
                    <div className={styles.yes}>Yes</div>
                  </button>
                  <button className={styles.right}>
                    <div className={styles.yes}>No</div>
                  </button>
                </div>
              </div>
            </div>
            <button className={styles.continue} onClick={onContinueClick}>
              <div className={styles.yes}>Continue</div>
              <img
                className={styles.continueChild}
                alt=""
                src="/group-1000001422.svg"
              />
            </button>
          </form>
        </div>
      </footer>
      <div className={styles.footer}>
        <div className={styles.container2}>
          <div className={styles.copyright}>
            <div className={styles.copyrightBgsBanking}>
              Copyright BGS Banking 2024
            </div>
            <div className={styles.legalLinks}>
              <div className={styles.copyrightBgsBanking}>Privacy Policy</div>
              <div
                className={styles.copyrightBgsBanking}
              >{`Terms & Conditions`}</div>
            </div>
          </div>
          <div className={styles.socials}>
            <img
              className={styles.socialIcons}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <img className={styles.socialIcons} alt="" src="/vector-1.svg" />
            <img
              className={styles.akarIconsfacebookFill}
              loading="lazy"
              alt=""
              src="/akariconsfacebookfill.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation1440px;
