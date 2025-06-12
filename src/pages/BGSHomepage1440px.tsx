import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BGSHomepage1440px.module.css";

const BGSHomepage1440px: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/personal-information-1440px");
  }, [navigate]);

  return (
    <div className={styles.bgsHomepage1440px}>
      <header className={styles.header}>
        <div className={styles.container}>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-12@2x.png"
          />
          <div className={styles.menuRight}>
            <div className={styles.helpMenu}>
              <div className={styles.needAnyHelp}>Need any help?</div>
              <div className={styles.engParent}>
                <div className={styles.needAnyHelp}>ENG</div>
                <img
                  className={styles.languageDropdownIcon}
                  alt=""
                  src="/language-dropdown.svg"
                />
              </div>
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
                src="/avatar2@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <main className={styles.body}>
        <section className={styles.container1}>
          <div className={styles.titleSection}>
            <div className={styles.welcom}>
              <div className={styles.welcomeBack}>Welcome back,</div>
              <h1 className={styles.chandlerBing}>Chandler Bing</h1>
            </div>
            <div className={styles.buttonsSet}>
              <button className={styles.requestPayment}>
                <div className={styles.requestPayment1}>Request Payment</div>
              </button>
              <button className={styles.sendMoney}>
                <div className={styles.requestPayment1}>Send Money</div>
                <img
                  className={styles.sendMoneyChild}
                  alt=""
                  src="/group-1000001422.svg"
                />
              </button>
            </div>
          </div>
          <section className={styles.accountOverview}>
            <div className={styles.welcomeBack}>
              Here’s an overview of your account
            </div>
            <div className={styles.overviewCards}>
              <div className={styles.accountInfo}>
                <div className={styles.cardaccount}>
                  <div className={styles.checkingAccountParent}>
                    <div className={styles.checkingAccount}>
                      Checking Account
                    </div>
                    <div className={styles.streamlinebankParent}>
                      <img
                        className={styles.streamlinebankIcon}
                        loading="lazy"
                        alt=""
                        src="/streamlinebank.svg"
                      />
                      <div className={styles.spacer}>03 25481 9</div>
                    </div>
                  </div>
                  <h2 className={styles.cardIcon}>$10,540.00</h2>
                  <img
                    className={styles.iconbars}
                    loading="lazy"
                    alt=""
                    src="/iconbars.svg"
                  />
                </div>
                <div className={styles.cardaccount}>
                  <div className={styles.checkingAccountParent}>
                    <div className={styles.checkingAccount}>
                      Savings Account
                    </div>
                    <div className={styles.streamlinebankParent}>
                      <img
                        className={styles.streamlinebankIcon}
                        alt=""
                        src="/streamlinebank.svg"
                      />
                      <div className={styles.spacer}>02 54210 8</div>
                    </div>
                  </div>
                  <h2 className={styles.cardIcon}>$52,105.30</h2>
                  <img className={styles.iconbars} alt="" src="/iconbars.svg" />
                </div>
              </div>
              <div className={styles.registerCard}>
                <img
                  className={styles.registerCardChild}
                  loading="lazy"
                  alt=""
                  src="/frame-1000006962@2x.png"
                />
                <div className={styles.registerCardInfo}>
                  <div className={styles.registerABusinessAccountParent}>
                    <h3 className={styles.registerABusiness}>
                      Register a Business Account
                    </h3>
                    <div className={styles.haveDedicatedFinancial}>
                      Have dedicated financial tools for managing a company's
                      finances.
                    </div>
                  </div>
                  <div
                    className={styles.setupYourAccountParent}
                    onClick={onFrameContainerClick}
                  >
                    <div className={styles.setupYourAccount}>
                      Setup your account
                    </div>
                    <img
                      className={styles.sendMoneyChild}
                      alt=""
                      src="/group-1000001422-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.quickActions}>
            <div className={styles.title}>
              <div className={styles.recentActivity}>Quick Actions</div>
              <div className={styles.customiseWrapper}>
                <div className={styles.customise}>Customise</div>
              </div>
            </div>
            <div className={styles.actionButtons}>
              <button className={styles.calltoactioncard}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.text}>
                  <p className={styles.add}>Add</p>
                  <p className={styles.add}>Money</p>
                </div>
              </button>
              <button className={styles.calltoactioncard}>
                <img className={styles.icon} alt="" src="/icontransfer.svg" />
                <div className={styles.text}>
                  <p className={styles.add}>Fund</p>
                  <p className={styles.add}>Transfer</p>
                </div>
              </button>
              <button className={styles.calltoactioncard}>
                <img
                  className={styles.icon}
                  alt=""
                  src="/icontansaction1.svg"
                />
                <div className={styles.text2}>
                  <p className={styles.add}>Transaction</p>
                  <p className={styles.add}>History</p>
                </div>
              </button>
              <button className={styles.calltoactioncard}>
                <img className={styles.icon} alt="" src="/iconcredit.svg" />
                <div className={styles.text}>
                  <p className={styles.add}>Pay Credit</p>
                  <p className={styles.add}>Cards</p>
                </div>
              </button>
              <button className={styles.calltoactioncard}>
                <img className={styles.icon} alt="" src="/icon-1.svg" />
                <div className={styles.text}>
                  <p className={styles.add}>Activate</p>
                  <p className={styles.add}>Cards</p>
                </div>
              </button>
              <button className={styles.calltoactioncard}>
                <img className={styles.icon} alt="" src="/icon-2.svg" />
                <div className={styles.text}>
                  <p className={styles.add}>Pay Monthly</p>
                  <p className={styles.add}>{`Bills `}</p>
                </div>
              </button>
              <div className={styles.calltoactioncard6}>
                <img className={styles.icon} alt="" src="/icon-3.svg" />
                <div className={styles.text6}>
                  <p className={styles.add}>Send Money</p>
                  <p className={styles.add}>Overseas</p>
                </div>
              </div>
              <div className={styles.calltoactioncard6}>
                <img className={styles.icon} alt="" src="/icon-4.svg" />
                <div className={styles.text6}>
                  <p className={styles.add}>Mobile</p>
                  <p className={styles.add}>Top Up</p>
                </div>
              </div>
              <div className={styles.calltoactioncard8}>
                <img className={styles.icon} alt="" src="/icontransfer.svg" />
                <div className={styles.text6}>
                  <p className={styles.add}>Pay Credit</p>
                  <p className={styles.add}>Cards</p>
                </div>
              </div>
            </div>
          </section>
          <div className={styles.activitySection}>
            <section className={styles.activityLeft}>
              <div className={styles.quickSend}>
                <div className={styles.quickSend1}>Quick Send</div>
                <div className={styles.people}>
                  <div className={styles.peopleItemsParent}>
                    <img
                      className={styles.peopleItemsIcon}
                      loading="lazy"
                      alt=""
                      src="/frame-1000006955@2x.png"
                    />
                    <div className={styles.josephYoh}>
                      <p className={styles.add}>Joseph</p>
                      <p className={styles.add}>Yoh</p>
                    </div>
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.avatarsParent}>
                      <img
                        className={styles.avatarsIcon}
                        loading="lazy"
                        alt=""
                        src="/ellipse-1994@2x.png"
                      />
                      <div className={styles.initialBackgroundsParent}>
                        <div className={styles.initialBackgrounds} />
                        <div className={styles.d}>D</div>
                      </div>
                    </div>
                    <div className={styles.marthaStewartJohnsonContainer}>
                      <p className={styles.add}>Martha</p>
                      <p className={styles.add}>Stewart Johnson</p>
                    </div>
                  </div>
                  <div className={styles.peopleItemsParent}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/frame-1000006955-1@2x.png"
                    />
                    <div className={styles.andrewJohnson}>
                      <p className={styles.add}>Andrew</p>
                      <p className={styles.add}>Johnson</p>
                    </div>
                  </div>
                  <div className={styles.peopleItemsParent}>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/frame-1000006955-2@2x.png"
                    />
                    <div className={styles.andrewJohnson}>
                      <p className={styles.add}>Wilson</p>
                      <p className={styles.add}>Tucker</p>
                    </div>
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.avatarsParent}>
                      <img
                        className={styles.avatarsIcon}
                        alt=""
                        src="/ellipse-1994-1@2x.png"
                      />
                      <div className={styles.initialBackgroundsParent}>
                        <div className={styles.groupChild} />
                        <div className={styles.c}>C</div>
                      </div>
                    </div>
                    <div className={styles.marthaStewartJohnsonContainer}>
                      <p className={styles.add}>Kevon</p>
                      <p className={styles.add}>Richardson</p>
                    </div>
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.ellipseContainer}>
                      <img
                        className={styles.avatarsIcon}
                        alt=""
                        src="/ellipse-1994-2@2x.png"
                      />
                      <div className={styles.initialBackgroundsParent}>
                        <div className={styles.groupChild} />
                        <div className={styles.d}>T</div>
                      </div>
                    </div>
                    <div className={styles.marthaStewartJohnsonContainer}>
                      <p className={styles.add}>Donald</p>
                      <p className={styles.add}>Radhowsky</p>
                    </div>
                  </div>
                  <div className={styles.peopleItemsParent}>
                    <img
                      className={styles.peopleItemsIcon}
                      alt=""
                      src="/frame-1000006955-3@2x.png"
                    />
                    <div className={styles.andrewJohnson}>
                      <p className={styles.add}>Michelle</p>
                      <p className={styles.add}>Hartley</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.quickSend}>
                <div className={styles.title}>
                  <div className={styles.recentActivity}>Recent Activity</div>
                  <div className={styles.viewAllTransactions}>
                    View all transactions
                  </div>
                </div>
                <div className={styles.activityCards}>
                  <div className={styles.cardactions}>
                    <div className={styles.menuRight}>
                      <img
                        className={styles.iconnetflix}
                        alt=""
                        src="/icontransfer-1.svg"
                      />
                      <div className={styles.fundTransferParent}>
                        <div className={styles.customise}>Fund Transfer</div>
                        <div className={styles.transferFromSavings}>
                          Transfer from Savings to Karla
                        </div>
                      </div>
                    </div>
                    <div className={styles.datePlaceholderParent}>
                      <div className={styles.datePlaceholder}>- $1000.00</div>
                      <div className={styles.transferFromSavings}>
                        Aug 16, 2023, 4:30 PM
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardactions1}>
                    <div className={styles.menuRight}>
                      <img
                        className={styles.iconnetflix}
                        loading="lazy"
                        alt=""
                        src="/iconnetflix.svg"
                      />
                      <div className={styles.fundTransferParent}>
                        <div className={styles.customise}>Netflix</div>
                        <div className={styles.transferFromSavings}>
                          Monthly bill payment
                        </div>
                      </div>
                    </div>
                    <div className={styles.datePlaceholderParent}>
                      <div className={styles.datePlaceholder}>- $36.00</div>
                      <div className={styles.transferFromSavings}>
                        Jul 30, 2023, 12:00 AM
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardactions1}>
                    <div className={styles.menuRight}>
                      <img
                        className={styles.iconnetflix}
                        loading="lazy"
                        alt=""
                        src="/iconspotify.svg"
                      />
                      <div className={styles.fundTransferParent}>
                        <div className={styles.customise}>Spotify</div>
                        <div className={styles.transferFromSavings}>
                          Monthly bill payment
                        </div>
                      </div>
                    </div>
                    <div className={styles.datePlaceholderParent}>
                      <div className={styles.datePlaceholder}>- $6.99</div>
                      <div className={styles.transferFromSavings}>
                        Jul 30, 2023, 12:00 AM
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardactions3}>
                    <div className={styles.menuRight}>
                      <img
                        className={styles.iconnetflix}
                        loading="lazy"
                        alt=""
                        src="/iconaddmoney.svg"
                      />
                      <div className={styles.fundTransferParent}>
                        <div className={styles.customise}>Deposit</div>
                        <div className={styles.transferFromSavings}>
                          Cash Deposit
                        </div>
                      </div>
                    </div>
                    <div className={styles.parent1}>
                      <div className={styles.datePlaceholder}>+ $500.00</div>
                      <div className={styles.transferFromSavings}>
                        Jul 30, 2023, 12:00 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.activityLeft}>
              <div className={styles.quickSend}>
                <div className={styles.quickSend1}>Cards</div>
                <div className={styles.cardContentParent}>
                  <div className={styles.cardContent}>
                    <div className={styles.graphBarsParent}>
                      <div className={styles.graphBars} />
                      <div className={styles.graphBars1} />
                    </div>
                    <div className={styles.cardInfo}>
                      <div className={styles.creditCard}>Credit card</div>
                      <div className={styles.bankIdentifier}>
                        <img
                          className={styles.streamlinebankIcon}
                          alt=""
                          src="/streamlinebank.svg"
                        />
                        <div className={styles.balance}>02 54210 8</div>
                      </div>
                    </div>
                    <img
                      className={styles.cardContentChild}
                      loading="lazy"
                      alt=""
                      src="/group-1000001423.svg"
                    />
                    <h3 className={styles.h3}>$52,105.30</h3>
                  </div>
                  <div className={styles.quickLinksParent}>
                    <div className={styles.quickLinks}>Quick Links</div>
                    <div className={styles.cardLinks}>
                      <div className={styles.quickLinks}>
                        Credit Card Statement
                      </div>
                      <div className={styles.quickLinks}>Outstanding Bill</div>
                      <div className={styles.quickLinks}>
                        Transaction History
                      </div>
                      <div className={styles.quickLinks}>Daily Limit</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.quickSend}>
                <div className={styles.recentActivity}>
                  Upcoming Payments for this card
                </div>
                <div className={styles.activityCards}>
                  <div className={styles.cardactions3}>
                    <div className={styles.menuRight}>
                      <img
                        className={styles.iconnetflix}
                        loading="lazy"
                        alt=""
                        src="/iconadobe.svg"
                      />
                      <div className={styles.fundTransferParent}>
                        <div className={styles.customise}>
                          Adobe Creative Cloud
                        </div>
                        <div className={styles.today}>Today</div>
                      </div>
                    </div>
                    <div className={styles.datePlaceholder}>$70.00</div>
                  </div>
                  <button className={styles.cardactions5}>
                    <div className={styles.menuRight}>
                      <img
                        className={styles.iconnetflix}
                        alt=""
                        src="/iconprime.svg"
                      />
                      <div className={styles.fundTransferParent}>
                        <div className={styles.amazonPrime}>Amazon Prime</div>
                        <div className={styles.jul152024}>Jul 15, 2024</div>
                      </div>
                    </div>
                    <div className={styles.div5}>$4.99</div>
                  </button>
                  <div className={styles.cardactions3}>
                    <div className={styles.menuRight}>
                      <img
                        className={styles.iconnetflix}
                        loading="lazy"
                        alt=""
                        src="/iconchatgpt.svg"
                      />
                      <div className={styles.fundTransferParent}>
                        <div className={styles.customise}>
                          Chat GPT Subscription
                        </div>
                        <div className={styles.transferFromSavings}>
                          Jul 26, 2024
                        </div>
                      </div>
                    </div>
                    <div className={styles.datePlaceholder}>$6.00</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container2}>
          <div className={styles.copyright}>
            <div className={styles.balance}>Copyright BGS Banking 2024</div>
            <div className={styles.legalLinks}>
              <div className={styles.balance}>Privacy Policy</div>
              <div className={styles.balance}>{`Terms & Conditions`}</div>
            </div>
          </div>
          <div className={styles.socials}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
            <img
              className={styles.akarIconsfacebookFill}
              loading="lazy"
              alt=""
              src="/akariconsfacebookfill.svg"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BGSHomepage1440px;
