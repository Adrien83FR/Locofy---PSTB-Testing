import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PersonalVerification1440px.module.css";

const PersonalVerification1440px: FunctionComponent = () => {
  const navigate = useNavigate();

  const onActionButtonsClick = useCallback(() => {
    navigate("/personal-information-1440px");
  }, [navigate]);

  const onActionButtonsClick1 = useCallback(() => {
    // Please sync "Business Information - 1440px" to the project
  }, []);

  return (
    <div className={styles.personalVerification1440px}>
      <header className={styles.header}>
        <div className={styles.container}>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-11@2x.png"
          />
          <div className={styles.menuRight}>
            <div className={styles.helpMenu}>
              <div className={styles.needAnyHelp}>Need any help?</div>
              <select className={styles.language} />
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
                src="/avatar1@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <main className={styles.body}>
        <div className={styles.cotainer}>
          <section className={styles.sidemenu}>
            <div className={styles.menuItems}>
              <div className={styles.menuIconsRow}>
                <div className={styles.menuItemsRow}>
                  <img
                    className={styles.iconpersonal}
                    loading="lazy"
                    alt=""
                    src="/iconpersonal.svg"
                  />
                  <div className={styles.text}>Personal Information</div>
                </div>
                <img
                  className={styles.menuIconsRowChild}
                  alt=""
                  src="/vector-13881.svg"
                />
              </div>
              <img
                className={styles.menuItemsChild}
                loading="lazy"
                alt=""
                src="/group-1000001433.svg"
              />
            </div>
            <img
              className={styles.menuItemsIcon}
              alt=""
              src="/navigation-items.svg"
            />
            <div className={styles.menuItems1}>
              <div className={styles.menuIconsRow}>
                <div className={styles.menuItemsRow}>
                  <img
                    className={styles.iconpersonal}
                    loading="lazy"
                    alt=""
                    src="/iconverified.svg"
                  />
                  <div className={styles.text}>Personal Verification</div>
                </div>
                <img
                  className={styles.menuIconsSeparator}
                  loading="lazy"
                  alt=""
                  src="/vector-1388.svg"
                />
              </div>
              <img
                className={styles.menuItemsItem}
                alt=""
                src="/group-1000001433.svg"
              />
            </div>
            <img
              className={styles.menuItemsIcon}
              loading="lazy"
              alt=""
              src="/navigation-items.svg"
            />
            <div className={styles.menuItems2}>
              <div className={styles.menuIconsRow}>
                <div className={styles.menuItemsRow}>
                  <img
                    className={styles.iconpersonal}
                    loading="lazy"
                    alt=""
                    src="/iconbusiness.svg"
                  />
                  <div className={styles.text2}>Business Information</div>
                </div>
                <img
                  className={styles.menuIconsSeparator}
                  alt=""
                  src="/vector-1388.svg"
                />
              </div>
              <img
                className={styles.menuItemsItem}
                alt=""
                src="/group-1000001433.svg"
              />
            </div>
            <img
              className={styles.menuItemsIcon}
              loading="lazy"
              alt=""
              src="/navigation-items.svg"
            />
            <div className={styles.menuItems2}>
              <div className={styles.menuIconsRow}>
                <div className={styles.menuItemsRow}>
                  <img
                    className={styles.iconpersonal}
                    loading="lazy"
                    alt=""
                    src="/iconbusinessowners.svg"
                  />
                  <div className={styles.text}>Business Owners</div>
                </div>
                <img
                  className={styles.menuIconsSeparator}
                  alt=""
                  src="/vector-1388.svg"
                />
              </div>
              <img
                className={styles.menuItemsItem}
                alt=""
                src="/group-1000001433.svg"
              />
            </div>
            <img
              className={styles.menuItemsIcon}
              loading="lazy"
              alt=""
              src="/navigation-items.svg"
            />
            <div className={styles.menuItems2}>
              <div className={styles.menuIconsRow}>
                <div className={styles.menuItemsRow}>
                  <img
                    className={styles.iconpersonal}
                    loading="lazy"
                    alt=""
                    src="/iconnames.svg"
                  />
                  <div className={styles.text}>Business Names</div>
                </div>
                <img
                  className={styles.menuIconsSeparator}
                  alt=""
                  src="/vector-1388.svg"
                />
              </div>
              <img
                className={styles.menuItemsItem}
                alt=""
                src="/group-1000001433.svg"
              />
            </div>
            <img
              className={styles.menuItemsIcon}
              loading="lazy"
              alt=""
              src="/navigation-items.svg"
            />
            <div className={styles.menuItems2}>
              <div className={styles.menuIconsRow}>
                <div className={styles.menuItemsRow}>
                  <img
                    className={styles.iconpersonal}
                    loading="lazy"
                    alt=""
                    src="/icontansaction.svg"
                  />
                  <div className={styles.text}>Formation Documents</div>
                </div>
                <img
                  className={styles.menuIconsSeparator}
                  alt=""
                  src="/vector-1388.svg"
                />
              </div>
              <img
                className={styles.menuItemsItem}
                alt=""
                src="/group-1000001433.svg"
              />
            </div>
            <img
              className={styles.menuItemsIcon}
              loading="lazy"
              alt=""
              src="/navigation-items.svg"
            />
            <div className={styles.menuItems2}>
              <div className={styles.menuIconsRow}>
                <div className={styles.menuItemsRow}>
                  <img
                    className={styles.iconpersonal}
                    loading="lazy"
                    alt=""
                    src="/iconein.svg"
                  />
                  <div className={styles.text}>EIN Verification</div>
                </div>
                <img
                  className={styles.menuIconsSeparator}
                  alt=""
                  src="/vector-1388.svg"
                />
              </div>
              <img
                className={styles.menuItemsItem}
                alt=""
                src="/group-1000001433.svg"
              />
            </div>
          </section>
          <div className={styles.stepBody}>
            <section className={styles.formContainer}>
              <div className={styles.formTitle}>
                <div className={styles.band}>
                  <div className={styles.text7}>
                    We guarantee that these information will stay confidential
                    and secured
                  </div>
                  <div className={styles.learnMore}>Learn more</div>
                </div>
                <h1
                  className={styles.title}
                >{`Select one type of document to identify yourself. `}</h1>
              </div>
              <div className={styles.formTitle}>
                <div className={styles.theIdentificationCard}>
                  The identification card you select will be scanned in the next
                  step. Please make sure it has not expired and is clear and
                  easy to read.
                </div>
                <div className={styles.fields}>
                  <div className={styles.identificationTypes}>
                    <div className={styles.driversLicense}>Drivers License</div>
                    <img
                      className={styles.identificationIcons}
                      alt=""
                      src="/identification-icons.svg"
                    />
                  </div>
                  <div className={styles.identificationTypes}>
                    <div className={styles.driversLicense}>Passport</div>
                    <img
                      className={styles.identificationIcons}
                      alt=""
                      src="/identification-icons.svg"
                    />
                  </div>
                  <div className={styles.identificationTypes}>
                    <div className={styles.driversLicense}>
                      International ID
                    </div>
                    <img
                      className={styles.identificationIcons}
                      alt=""
                      src="/identification-icons.svg"
                    />
                  </div>
                </div>
              </div>
            </section>
            <div className={styles.buttons}>
              <button
                className={styles.actionButtons}
                onClick={onActionButtonsClick}
              >
                <div className={styles.back}>Back</div>
              </button>
              <button
                className={styles.actionButtons1}
                onClick={onActionButtonsClick1}
              >
                <div className={styles.back}>Continue</div>
                <img
                  className={styles.actionButtonsChild}
                  alt=""
                  src="/group-1000001422.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.footer}>
        <div className={styles.container1}>
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

export default PersonalVerification1440px;
