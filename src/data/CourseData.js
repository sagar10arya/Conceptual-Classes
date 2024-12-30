const coursesData = [
  {
    id: 1,
    category: "JEE",
    description: "Access notes and resources for JEE preparation.",
    levels: [
      {
        name: "11",
        subjects: [
          {
            name: "Physics",
            chapters: [
              {
                name: "UNIT 1: PHYSICS AND MEASUREMENT",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/13qZUaflRwPQPLD6ZF7qHXLKsLR33qInt?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 2: KINEMATICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/13rXF1QgnxBdr3UGJN5lOcnaFKhRMhrDJ?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 3: LAWS OF MOTION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/13vv4Yr_FqWcDdKoNdWqyjdIbmgj82uPt?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 4: WORK, ENERGY, AND POWER",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/13vy9E5Vwpl16xcf5LSfu50ElgfQdOIJ2?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT5: ROTATIONAL MOTION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/14-Mnp0SEZJ6Oxy1c05IzZmqa4J0ugN6v?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 6: GRAVITATION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/14-xd8CuL9Usn9iwhbXkfxy1GKbLjK83-?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 7: PROPERTIES OF SOLIDS AND LIQUIDS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/142rwEaKT1wDXhL3Y0WsBtT6j1BPmX5G9?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 8: THERMODYNAMICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/14ApxXMXf943zfJwo-Vv-JG_IWqYRooHW?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 9: KINETIC THEORY OF GASES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/14FJ_momoArI_fQH6x_OUYm1lOk2Iyo0q?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 10: OSCILLATIONS AND WAVES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/14J7qmQShsjHdIqhE2uA6KM3uuf_CYsfc?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 11: ELECTROSTATICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/14KZOvPLljcYBv-xBAss1qWrou4YT3bWw?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 12: CURRENT ELECTRICITY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/14QRLPx1BckaLGzcJafyZ91NP2HBtQHde?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 13: MAGNETIC EFFECTS OF CURRENT AND MAGNETISM",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/14RZEHQiDRf_WzF-tvcs-P_BHItTvHFqC?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 14: ELECTROMAGNETIC INDUCTION AND ALTERNATING CURRENTS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/14VV_F5-Ft87SsAFsPpmVahZuR2olS7cY?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 15: ELECTROMAGNETIC WAVES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/14cxTCvqJY-KUaUmw26c5tmruZKfbCC6j?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 16: OPTICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/14nfvIQEPcwVSOsHWH7ZKYkF2mPXRN4c0?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 17: DUAL NATURE OF MATTER AND RADIATION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/14ppSF3pbxz9XsGZcd-pD4cFyEojxPm4c?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 18: ATOMS AND NUCLEI",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/156iT9NghdXJRrgxd0s6XaehfGbvarXRV?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 19: ELECTRONIC DEVICES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/158TE-3Zo9R1r1R-yDiTudgupi0tuPATq?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 20: EXPERIMENTAL SKILLS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/15ARlQMxI2-n7rgm2wUh6BUUwZKprY5kk?usp=drive_link",
                  },
                ],
              },
            ],
          },
          {
            name: "Chemistry",
            chapters: [
              {
                name: "UNIT I: SOME BASIC CONCEPTS IN CHEMISTRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/15EVnHzp-aTdtBN5AWQF6TYqYQFtqE3ye?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 2: ATOMIC STRUCTURE",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/15KKqSDl1ORcp8PJjnminSdt_8grtL78m?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 3: CHEMICAL BONDING AND MOLECULAR STRUCTURE",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/15RgA1QfLNM-pbGhdOn1EunoxHKFRb-Hp?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 4: CHEMICAL THERMODYNAMICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/15SvfQILx53OkaMLk3NJJz6f3fbTG_GTO?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 5: SOLUTIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/15Vxo0QV-MwavFBlcc5zKqn2DEBbSKN-8?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 6: EQUILIBRIUM",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/15Z3JenKOvzCyPACSq_mC5fhwz-V6Y1Yx?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 7: REDOX REACTIONS AND ELECTROCHEMISTRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/15_YiJeTuCYXrGvAGUcVMv0ob1VTyP_S7?usp=drive_link  ",
                  },
                ],
              },
              {
                name: "UNIT 8: CHEMICAL KINETICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/15cToZH_r_hixt9oG5nz7vs4ZLr-eOglm?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 9: CLASSIFICATION OF ELEMENTS AND PERIODICITY IN PROPERTIES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/15hcwAqZlxV2683b2dvcNif058A29202D?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 10: P- BLOCK ELEMENTS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/15paGVpOALQg4_OdWmW-xfn6elCtn9xYJ?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 11: d - and f- BLOCK ELEMENTS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/15tcnzieSgR8LloSRprjHiWGmOQSXxz6h?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 12: CO-ORDINATION COMPOUNDS",
                resources: [
                  {
                    type: "Notes",
                    link: "/resources/jee/11/physics/newton/noteshttps://drive.google.com/drive/folders/15tdGUZ-kbp6p2hwrfbcc-mTuhNzbeloy?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 13: PURIFICATION AND CHARACTERISATION OF ORGANIC COMPOUNDS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/15wbu85BoL2yBfxIejkyhxD9UzxZgAKk9?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 14:SOME BASIC PRINCIPLES OF ORGANIC CHEMISTRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/15yQQyWIqJl-BJThnlaDZeTGRg1laI33S?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNITS 15: HYDROCARBONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/15zLdrnzbLzL2UUNaPt9SNkipUbu3q63a?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 16: ORGANIC COMPOUNDS CONTAINING HALOGENS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/15zeeWPV16jmkufXd0ALzWEW4yawXiFMn?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 17: ORGANIC COMPOUNDS CONTAINING OXYGEN",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/160F_lSr_WSycliSxmiKXhXiB6__DYoUz?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 18: ORGANIC COMPOUNDS CONTAINING NITROGEN",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/167xSVQ2CWQQFvVliPfrnvI_QWJq9KkOj?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 19: BIOMOLECULES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/169pzzSBmhQyhEuqVuOv4SgC-j3pWTMao?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 20: PRINCIPLES RELATED TO PRACTICAL CHEMISTRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/16BiBY6ByUn_otURtsUBOZ6KWqXMgzHR9?usp=drive_link",
                  },
                ],
              },
            ],
          },
          {
            name: "Mathematics",
            chapters: [
              {
                name: "UNIT 1: SETS, RELATIONS, AND FUNCTIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/12Z61-g_1tcU5jpQqT3PVYq6wZ7bzyR7d?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 2: COMPLEX NUMBERS AND QUADRATIC EQUATIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/12d0-ulKPuzMCx1mvTcg_Kwd9CVRTr0Ek?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT3: MATRICES AND DETERMINANTS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/12fwo6Ev7eCTkfDgBMK0AYxOxmangmSai?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 4: PERMUTATIONS AND COMBINATIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/12hSSfDgds7jNMWFRgrMSbz2zk6vx3ofi?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 5: BINOMIAL THEOREM AND ITS SIMPLE APPLICATIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/12k12l-lqi8NtPhKqOOxXld6fLGEN4Nj4?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 6: SEQUENCE AND SERIES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/12lGQOM6d6AAbqUfsb9odTkn2v0EdTmoi?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 7: LIMIT, CONTINUITY, AND DIFFERENTIABILITY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/12rIx3kTUuGeaGaXNb9T6e65AHPHixHQ3?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 8: INTEGRAL CALCULAS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/12wAykmRWrzR_xnDQXtqzaEcj3L_J_AmX?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 9: DIFFRENTIAL EQUATIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/135uZfWu-y_L547xkwoodpFjE1MuVy8rr?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 10: CO-ORDINATE GEOMETRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/137Pk3ysCdbfJzFL_-HGwIRSfolv4NWRm?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 11: THREE DIMENSIONAL GEOMETRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/13OguJ7D_8MkmEw1JCWp9uVd32YX5PWdQ?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 12: VECTOR ALGEBRA",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/13Rpji9ZPsQt3Ee_NY1lWngy_f8hn_chm?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 13: STATISTICS AND PROBABILITY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/13cNqe5c7g0feUUUhSmem5viIJN_2-chl?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 14: TRIGONOMETRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/13jWsLmEZCuosnoagsOs5XgNBJ_D7vDvd?usp=drive_link",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "12",
        subjects: [
          {
            name: "Physics",
            chapters: [], // Add this to avoid undefined errors
          },
          {
            name: "Chemistry",
            chapters: [], // Add this to avoid undefined errors
          },
          {
            name: "Mathematics",
            chapters: [], // Add this to avoid undefined errors
          },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "NEET",
    description: "Find the best study material for NEET exams.",
    levels: [
      {
        name: "11",
        subjects: [
          {
            name: "Physics",
            chapters: [
              {
                name: "UNIT 1: PHYSICS AND MEASUREMENT",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1vOIciJlT05t-FW9Z1MTcditwMMMR9ATF?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 2: KINEMATICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1bBmpc2ghS4q7GjHYGfhS_kshg0Dpvpey?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 3: LAWS OF MOTION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1QjEhLczajmGpJLxmWfYuhOzAYIGfX6PF?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 4: WORK, ENERGY, AND POWER",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1b6RRO8-ZtmFnlyRnPyQtz19QBg9kvGbi?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT5: ROTATIONAL MOTION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1yBTe1dXNJMY8Jc2VSNWyjVHEFh4DKFtJ?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 6: GRAVITATION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1e6BsLPH3x4JzaDZhiEFs_HBsnEGs85mp?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 7: PROPERTIES OF SOLIDS AND LIQUIDS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1BL-w7oij98dpe5s-ot_RUfuFB0pCwm5Z?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 8: THERMODYNAMICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1RxDk1KXgmsOqyyQQ6GOUt9Fe5gHGZ-KP?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 9: KINETIC THEORY OF GASES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/11LTOMMgHMz7it1EIknMtbQsXCJcOsw4M?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 10: OSCILLATIONS AND WAVES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1XGFxPDdxEB15LSl74zcbOPatax3N7tQt?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 11: ELECTROSTATICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1Y1F_6dZXABk_tZFqwEPqR2oiP1N4NaYC?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 12: CURRENT ELECTRICITY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1Er01aPbSmJYDwE_A7fIA6NLw0mukzd3n?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 13: MAGNETIC EFFECTS OF CURRENT AND MAGNETISM",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1zNct81TUparJ4CtC3_4AvtIA3qdGa2Xj?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 14: ELECTROMAGNETIC INDUCTION AND ALTERNATING CURRENTS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1RBQiUt-kyKtnvnJrJl1MJQB359eCa0w_?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 15: ELECTROMAGNETIC WAVES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1gdcotHjkyg-a3m3Rk2HYQKAYLdXrc34T?usp=drive_linkk",
                  },
                ],
              },
              {
                name: "UNIT 16: OPTICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1WwmpBuQ2plo49oGoziSc-YPymSQ_StfU?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 17: DUAL NATURE OF MATTER AND RADIATION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1KpDy1QlvloqyDtsszV_a5Y0Y4iPlg6rp?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 18: ATOMS AND NUCLEI",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1e5x8ze8KXu94xcPwJtMwyGN2uaLzuCIb?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 19: ELECTRONIC DEVICES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1HLoxp6ZkYwQRnU5W4s51gUjLgeI2CqQA?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 20: EXPERIMENTAL SKILLS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1q573oQVN_J-SgWYWkDHKekoJPymMUO_s?usp=drive_link",
                  },
                ],
              },
            ],
          },
          {
            name: "Chemistry",
            chapters: [
              {
                name: "UNIT I: SOME BASIC CONCEPTS IN CHEMISTRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1qmtAXs026Q3KEJb5Icv3UAZQx5KbVFg8?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 2: ATOMIC STRUCTURE",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1_IDI-v_bI6W7540nRhZXoPWTn6cmF9Kb?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 3: CHEMICAL BONDING AND MOLECULAR STRUCTURE",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1ibU0jAWP6P5eLXsSlz5X1k3CDwmYPIVV?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 4: CHEMICAL THERMODYNAMICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1EgIirMUHy6DtTKaK-dw7flblhWeOONEs?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 5: SOLUTIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1mPwjngfmzbobjwmgtUVNBm-nOw79t6T_?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 6: EQUILIBRIUM",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1CDYgZ2-c5I6bsSK7PMXct6thYtwO--8u?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 7: REDOX REACTIONS AND ELECTROCHEMISTRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1-Iigfm87HcJ4tXJgK--dbu0pZWzS0WiH?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 8: CHEMICAL KINETICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1-J6CzUYzZg5z4d1rk5oAK7k5NkKOyBrN?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 9: CLASSIFICATION OF ELEMENTS AND PERIODICITY IN PROPERTIES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1bf1WJ5q99ZDxwVSxQqlQOjykwqlCcPwO?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 10: P- BLOCK ELEMENTS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1l6YkG7FICM3gN2Qk8W-mUNPH1pb4T6lE?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 11: d - and f- BLOCK ELEMENTS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1eRgvxeCcnzSvK46q3jlgLRpwdonKDjOK?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 12: CO-ORDINATION COMPOUNDS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1rCWS7PP7hKlj3HzhOttuOvUbRCzY5oou?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 13: PURIFICATION AND CHARACTERISATION OF ORGANIC COMPOUNDS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1mlreMLGrYeejhvwyvOqze4MHOLz-oFHE?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 14:SOME BASIC PRINCIPLES OF ORGANIC CHEMISTRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/17E4ZA92QcKEaeim6ZnnL--3i-eRNyV9c?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNITS 15: HYDROCARBONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1NhBh2eOP01wXVOCbjkORJMOgxmiIVKUL?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 16: ORGANIC COMPOUNDS CONTAINING HALOGENS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1qhKIMTSIo5pARQ1jIeaUNy715XxGW9nM?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 17: ORGANIC COMPOUNDS CONTAINING OXYGEN",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1c7gpOnMk4tzZYClaDKI-EfoFFRJVHr5-?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 18: ORGANIC COMPOUNDS CONTAINING NITROGEN",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1ahe8O3Xe-TeH4x7PRDOJDoNBByCxCOqO?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 19: BIOMOLECULES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1yZaLyFwLTkzzsQhZmAC5Pr3pJln8L9Bf?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 20: PRINCIPLES RELATED TO PRACTICAL CHEMISTRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/15aeJ8nEZzvwqBOddEUZcP3Xk9raTz_aV?usp=drive_link",
                  },
                ],
              },
            ],
          },
          {
            name: "Biology",
            chapters: [
              {
                name: "UNIT 1: DIVERSITY IN LIVING WORLD",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1zVbHYLzRQWSZ9EQuQz2ESQ3AwA1KdLpV?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 2: STRUCTURAL ORGANISATION IN ANIMALS AND PLANTS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1rJKfmqGIyZjOJ63p9YZRnxlb6mAGUjIk?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 3: CELL STRUCTURE AND FUNCTION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1cG2O1Qaj3SQ0kSwtV43EwtWruB6sREjw?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 4: PLANT PHYSIOLOGY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1fZNSTWk_MOG2AyMLdKL8pMfJz8gSuaa2?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 5: HUMAN PHYSIOLOGY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1gYaoLsYMO0Eysec3GFxFCTBwULmfYpi0?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 6: REPRODUCTION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1zpc86DmrAsPbGo1KGrhljghWRSDqVlZY?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 7: GENETICS AND EVOLUTION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/19xXdp1bIMjOT9TMezo_5QCXll95CT9p6?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 8: BIOLOGY AND HUMAN WELFARE",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/10A1j6s2GGAcy_unsabP1GcSf-9ytxcDP?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 9: BIOTECHNOLOGY AND ITS APPLICATIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1hguVnjU8zH4DDyrH5zye3jc5hJZ2bkeS?usp=drive_link",
                  },
                ],
              },
              {
                name: "UNIT 10: ECOLOGY AND ENVIRONMENT",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1Nw6FFa6oycG9_B0EvhBd3aaxGuZyZ7q7?usp=drive_link",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "12",
        subjects: [
          {
            name: "Physics",
            chapters: [
              {
                name: "Kinematics",
                resources: [
                  {
                    type: "Notes",
                    link: "/resources/jee/11/physics/kinematics/notes",
                  },
                ],
              },
              {
                name: "Newton's laws of motion",
                resources: [
                  {
                    type: "Notes",
                    link: "/resources/jee/11/physics/newton/notes",
                  },
                ],
              },
            ],
          },
          {
            name: "Chemistry",
            chapters: [
              {
                name: "Atomic Structure",
                resources: [
                  {
                    type: "Notes",
                    link: "/resources/jee/11/chemistry/atomic-structure/notes",
                  },
                ],
              },
              {
                name: "Organic Chemistry",
                resources: [
                  {
                    type: "Notes",
                    link: "/resources/jee/11/chemistry/atomic-structure/notes",
                  },
                ],
              },
            ],
          },
          {
            name: "Biology",
            chapters: [
              {
                name: "Cell Structure",
                resources: [
                  {
                    type: "Notes",
                    link: "/resources/jee/11/chemistry/atomic-structure/notes",
                  },
                ],
              },
              {
                name: "Reproduction",
                resources: [
                  {
                    type: "Notes",
                    link: "/resources/jee/11/chemistry/atomic-structure/notes",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Boards XI-XII",
    description: "Get study material for 11 - 12 Boards and ace your exam.",
    levels: [
      {
        name: "11",
        subjects: [
          {
            name: "Physics",
            chapters: [
              {
                name: "UNITS AND MEASUREMENTS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1-XgPDltzEVy7OiSGQDrxNfPFR2NAvlMw",
                  },
                ],
              },
              {
                name: "MOTION IN A STRAIGHT LINE",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1iNjinJP7fnGKjBViiL9XgKMkMmPoC5Af?usp=drive_link",
                  },
                ],
              },
              {
                name: "MOTION IN A PLANE",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1ooUbb60jy_lLCPriDMQoH3oeiGSZNQnn?usp=drive_link",
                  },
                ],
              },
              {
                name: "LAWS OF MOTION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1St3kpx1Cqc0bzo_BGdICD47NSGDXCd54?usp=drive_link",
                  },
                ],
              },
              {
                name: "WORK, ENERGY AND POWER",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1cGKxTrDmviDTkj-vKKPZBKcfN2XuJia0?usp=drive_link",
                  },
                ],
              },
              {
                name: "SYSTEM OF PARTICLES AND ROTATIONAL MOTION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/11rd8B_8GFA7qYSdW83nFFsq_7bjziDxp?usp=drive_link",
                  },
                ],
              },
              {
                name: "GRAVITATION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/16aHnoA9JXq6vMfkWfln6A_6El3R5vYuC",
                  },
                ],
              },
              {
                name: "MECHANICAL PROPERTIES OF SOLIDS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/15e_l5vT8c-WLMQ5xDuOnj3m5EsCCNZm-?usp=drive_link",
                  },
                ],
              },
              {
                name: "MECHANICAL PROPERTIES OF FLUIDS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1NEJTJDj5pW55szfYIPyGMzKmP-MmHfCP?usp=drive_link",
                  },
                ],
              },
              {
                name: "THERMAL PROPERTIES OF MATTER",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1gOQtsa-dRJqFimi56G6ZOC3x4dxyI3td?usp=drive_link",
                  },
                ],
              },
              {
                name: "THERMODYNAMICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1f2YZWlog25bNwA6sCMJnE5SZ6qsI9IHa?usp=drive_link",
                  },
                ],
              },
              {
                name: "KINETIC THEORY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/19a5ptbBtMGONbIdRqQU1hM0GNMPk6CS4?usp=drive_link",
                  },
                ],
              },
              {
                name: "OSCILLATIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1X-0kRHAAU2napjrMY448teLGdS5ggYVf?usp=drive_link",
                  },
                ],
              },

              {
                name: "WAVES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1YfBIhWW8BnmGdGSDMPjJNkSjsSM15SAF?usp=drive_link",
                  },
                ],
              },
            ],
          },
          {
            name: "Chemistry",
            chapters: [
              {
                name: "SOME BASIC CONCEPTS OF CHEMISTRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/10Fkm-Bsf6sXxl1DivV4qkQvFESoJxmGD?usp=drive_link",
                  },
                ],
              },
              {
                name: "STRUCTURE OF ATOM",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/10GuesrPARy3CpiECXhrCln5SeT-RXxvt?usp=drive_link",
                  },
                ],
              },
              {
                name: "CLASSIFICATION OF ELEMENTS AND PERIODICITY IN PROPERTIES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/10JYMYXr5EJ8EzCfA1_ZqE7aWE3Cp8oES?usp=drive_link",
                  },
                ],
              },
              {
                name: "CHEMICAL BONDING AND MOLECULAR STRUCTURE",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/10LTpMIQkf8hqSQCqRA8QFzxSBNMC_5QF?usp=drive_link",
                  },
                ],
              },
              {
                name: "CHEMICAL THERMODYNAMICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/10SAs2c_mCtab07auwjpK8BNTQO5deBd3?usp=drive_link",
                  },
                ],
              },
              {
                name: "EQUILIBRIUM",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/10TMNyIC-v6_urwTEFLLM-4OHj7JExFAF?usp=drive_link",
                  },
                ],
              },
              {
                name: "REDOX REACTIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/10Yinl9F83pgqqACxQ85bwg5fK_L_CEX5?usp=drive_link",
                  },
                ],
              },
              {
                name: "ORGANIC CHEMISTRY: SOME BASIC PRINCIPLES AND TECHNIQUES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/10_N0d5mtUEjAgR6plKoXsgSx2d_xLZLz?usp=drive_link",
                  },
                ],
              },
              {
                name: "HYDROCARBONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/10cj7CDgcWX9u4WFrIXLyn916HWlUJvLm?usp=drive_link",
                  },
                ],
              },
            ],
          },
          {
            name: "Biology",
            chapters: [
              {
                name: "THE LIVING WORLD",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/10j0FkzVemvMqn1IRFphxonFIL-GQCtgA?usp=drive_link",
                  },
                ],
              },
              {
                name: "BIOLOGICAL CLASSIFICATION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/10kX3yOAGDjH7FeAXzuc0-nFPzdx2j1AW?usp=drive_link",
                  },
                ],
              },
              {
                name: "PLANT KINGDOM",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/10oy94ZiTpqBiwjdrF0BKk3oHNYBtjcjo?usp=drive_link",
                  },
                ],
              },
              {
                name: "ANIMAL KINGDOM",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/10tEsRgfJZUTamgdoFFi80ClP4AvYXvGf?usp=drive_link",
                  },
                ],
              },
              {
                name: "MORPHOLOGY OF FLOWERING PLANTS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/10uqqJs_PVCI2RvUTw4xR4mhTq6lfHsAD?usp=drive_link",
                  },
                ],
              },
              {
                name: "ANATOMY OF FLOWERING PLANTS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/10uxkR2JwIJhyY3l0l-1BB3lYFviDQC0S?usp=drive_link",
                  },
                ],
              },
              {
                name: "STRUCTURAL ORGANISATION IN ANIMALS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/10znGK1k3zmF2DW78u5_TmCCjuqniEHwf?usp=drive_link",
                  },
                ],
              },
              {
                name: "CELL-THE UNIT OF LIFE",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/110uW0Dau-uGg5m_RKeXYb8fDwcMCYYfW?usp=drive_link",
                  },
                ],
              },
              {
                name: "BIOMOLECULES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/113L9Yq78uGCew_EcFXalqC30EqHlohQG?usp=drive_link",
                  },
                ],
              },
              {
                name: "CELL CYCLE AND CELL DIVISION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/114pb4lYTBxDb5saj5dF3EqLxzZ8R1cSo?usp=drive_link",
                  },
                ],
              },
              {
                name: "PHOTOSYNTHESIS IN HIGHER PLANTS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/116AvQhh1U3qXbjjsIBZjv-eczOBgTtPj?usp=drive_link",
                  },
                ],
              },
              {
                name: "RESPIRATION IN PLANTS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/116M6z2RP6h_DYS4vmVCl1cdg-kfSq3Ll?usp=drive_link",
                  },
                ],
              },
              {
                name: "PLANT - GROWTH AND DEVELOPMENT",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/118k2E-SDwHAAlbgHiEBS3ZoKCJg8MD90?usp=drive_link",
                  },
                ],
              },
              {
                name: "BREATHING AND EXCHANGE OF GASES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/11IOArgDUd6Adp9cczdWbkqCcX3fbgesn?usp=drive_link",
                  },
                ],
              },
              {
                name: "BODY FLUIDS AND CIRCULATION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/11WH-0wYc4ny4wzs70wAbwKx8GYUL5O9a?usp=drive_link",
                  },
                ],
              },
              {
                name: "EXCRETORY PRODUCTS AND THEIR ELIMINATION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/11WQIg-EBzK9shE4FUTtI0wr6mk0Y_dIM?usp=drive_link",
                  },
                ],
              },
              {
                name: "LOCOMOTION AND MOVEMENT",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/11ZU2TLWw6CvKlr2uNOPrf8Qa3S-Ht_eN?usp=drive_link",
                  },
                ],
              },
              {
                name: "NEURAL CONTROL AND COORDINATION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/11dWZGOgJD6omfhYykS3I719eTskeGliF?usp=drive_link",
                  },
                ],
              },
              {
                name: "CHEMICAL COORDINATION AND INTEGRATION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/11dXYh19jcHt0ly8ID-fyMsFjGftlN-Ck?usp=drive_link",
                  },
                ],
              },
            ],
          },
          {
            name: "Maths",
            chapters: [
              {
                name: "SETS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1SNtc9dkMZVsycGdq6bfqqexchyIhsNcL?usp=drive_link",
                  },
                ],
              },
              {
                name: "RELATIONS AND FUNCTIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1yOuCqHyHyb_ZC7OlDdwREvqQBS94GQ0A?usp=drive_link",
                  },
                ],
              },
              {
                name: "TRIGONOMETRIC FUNCTIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1dcxTIzbqu5P9k1NXna1MvwfGzTeK6Q8n?usp=drive_link",
                  },
                ],
              },
              {
                name: "COMPLEX NUMBERS AND QUADRATIC EQUATIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1Vl4aX6fQDZ6tD8wnX18AxxSurDmdsYwq?usp=drive_link",
                  },
                ],
              },
              {
                name: "LINEAR INEQUALITIES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1IN1hHMAFlgt0wmASsNE6B4PnZ6jF_wX-?usp=drive_link",
                  },
                ],
              },
              {
                name: "PERMUTATIONS AND COMBINATIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1BePJQWtKaWQrmlD-6tAvpobrys3Opmb6?usp=drive_link",
                  },
                ],
              },
              {
                name: "BINOMIAL THEOREM",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1JzA6-cg3X5ZZHvayaeAC5QxrwyKXyPOy?usp=drive_link",
                  },
                ],
              },
              {
                name: "SEQUENCES AND SERIES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1Q-iSF-qTwWBLF4w7UW7TQQB8ImOJIpLs?usp=drive_link",
                  },
                ],
              },
              {
                name: "STRAIGHT LINES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1PxuE5Bxix7zLGj_YrV_bzyTrAz-RMjB8?usp=drive_link",
                  },
                ],
              },
              {
                name: "CONIC SECTIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1PvKSH3VzP6_EaimlL_cWGMESlscnwtb-?usp=drive_link",
                  },
                ],
              },
              {
                name: "INTRODUCTION TO THREE DIMENSIONAL GEOMETRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1Pv6NDycDr_G6suN475IauLVR_PW6heQy?usp=drive_link",
                  },
                ],
              },
              {
                name: "LIMITS AND DERIVATIVES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1PtZ90NKqMRznxp7YECThAxAZ49IrQENF?usp=drive_link",
                  },
                ],
              },
              {
                name: "STATISTICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1Pt2KfGXfV8fbTO-GgQUbmItEurwJ51ie?usp=drive_link",
                  },
                ],
              },
              {
                name: "PROBABILITY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1PrXY7-FHi2EBvLzecqSk3rJ2uBVCl58Y?usp=drive_link",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "12",
        subjects: [
          {
            name: "Physics",
            chapters: [
              {
                name: "ELECTRIC CHARGES AND FIELDS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1Byn9keBlz0z9bfPB2TVaLxFyUb4YQifE?usp=drive_link",
                  },
                ],
              },
              {
                name: "ELECTROSTATIC POTENTIAL AND CAPACITANCE",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/19ahsE5iJ4ztFbLgOM12puNL3XPEqibcJ?usp=drive_link",
                  },
                ],
              },
              {
                name: "CURRENT ELECTRICITY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1W36-6iRfyxJOguF3kBQG_3UGJWhu_mQ8?usp=drive_link",
                  },
                ],
              },
              {
                name: "MOVING CHARGES AND MAGNETISM",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1onRPN_9PdR-Ax4vD7W3x1p7VW-faguZn?usp=drive_link",
                  },
                ],
              },
              {
                name: "MAGNETISM AND MATTER",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1pc5e8XiQHo8DgPWlKhXuefB_fXX19oLi?usp=drive_link",
                  },
                ],
              },
              {
                name: "ELECTROMAGNETIC INDUCTION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1HHL9ArxhNTdWVC8K3wQUUssd2rKxz-lC?usp=drive_link",
                  },
                ],
              },
              {
                name: "ALTERNATING CURRENT",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1oHBEkl0nAiprfE6YZwEawK0i5NxhvB7N?usp=drive_link",
                  },
                ],
              },
              {
                name: "ELECTROMAGNETIC WAVES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1de7wJrqznlGrWAODBpivy81vHKUqBqOt?usp=drive_link",
                  },
                ],
              },
              {
                name: "RAY OPTICS AND OPTICAL INSTRUMENTS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1myhy7JKnBkmnUi9kTqfAQCj_jD_9fu0R?usp=drive_link",
                  },
                ],
              },
              {
                name: "WAVE OPTICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1leUsDs-BCL3rRJ751fHs2uTfCzW2NY33?usp=drive_link",
                  },
                ],
              },
              {
                name: "DUAL NATURE OF RADIATION AND MATTER",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1Kg2Emqod83e2Wspo16u9zfRh7tk0sNsy?usp=drive_link",
                  },
                ],
              },
              {
                name: "ATOMS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1ehV5r9oUzcSdbXx-Ku6gT2QzgRJyYbyy?usp=drive_link",
                  },
                ],
              },

              {
                name: "NUCLEI",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1yiates7rDxXhEGXG267wjxHOyrTUd1ct?usp=drive_link",
                  },
                ],
              },

              {
                name: "SEMICONDUCTOR ELECTRONICS: MATERIALS, DEVICES AND SIMPLE CIRCUITS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1iRE3-zztWRVWM3lB-QwXQCozScfO7ACH?usp=drive_link",
                  },
                ],
              },
            ],
          },
          {
            name: "Chemistry",
            chapters: [
              {
                name: "SOLUTIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1-6mEzWX0XK6ALNkjXB9VMGurNk2uNz9f?usp=drive_link",
                  },
                ],
              },
              {
                name: "ELECTROCHEMISTRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1-Gilz8UVdxYgHExRmhS8S5vyXoRciOis?usp=drive_link",
                  },
                ],
              },
              {
                name: "CHEMICAL KINETICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1-TGwv5cuBN5ZgTIr_NrGsgSrADx3nqrE?usp=drive_link",
                  },
                ],
              },
              {
                name: "D AND F BLOCK ELEMENTS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1-f9TdGWqAF0I5waVBsxLCuVJgybTzqpA?usp=drive_link",
                  },
                ],
              },
              {
                name: "COORDINATION COMPOUNDS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1-hFyCHUCo7Rhorz8waQ1fgP6R_YoeYJ7?usp=drive_link",
                  },
                ],
              },
              {
                name: "HALOALKANES AND HALOARENES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1-jKD4fN7Nig9DOiPU9mILY3beV69m87b?usp=drive_link",
                  },
                ],
              },
              {
                name: "ALCOHOLS, PHENOLS AND ETHERS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1-jYngEXFOCCapF9k6iojeM8AItJhYynp?usp=drive_link",
                  },
                ],
              },
              {
                name: "ALDEHYDES, KETONES AND CARBOXYLIC ACIDS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1-nJ4pRqKK6VsIq0yQTD2LhEnvG_BOOCI?usp=drive_link",
                  },
                ],
              },
              {
                name: "AMINES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/100hig-ybcnMPuXUL9vKx3ehwZDuei-Fa?usp=drive_link",
                  },
                ],
              },
              {
                name: "BIOMOLECULES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/101iIjarF8-oUCw0r4VkKGaXH8DGEbLhK?usp=drive_link",
                  },
                ],
              },
            ],
          },
          {
            name: "Biology",
            chapters: [
              {
                name: "SEXUAL REPRODUCTION IN FLOWERING PLANTS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/11f_qk_m6xO9XguJ8VJsFRDSJLu7SjUzz?usp=drive_link",
                  },
                ],
              },
              {
                name: "HUMAN REPRODUCTION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/11l4GiCEOCa87s140eRb0GdUE36CIV55N?usp=drive_link",
                  },
                ],
              },
              {
                name: "REPRODUCTIVE HEALTH",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/11nX_ToeZszX11yj2NgDUVcvJVeGPGHL8?usp=drive_link",
                  },
                ],
              },
              {
                name: "PRINCIPLES OF INHERITANCE AND VARIATION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/11oWXgfL2Nu6JFQdx00g_ZpfAAJlTZQY_?usp=drive_link",
                  },
                ],
              },
              {
                name: "MOLECULAR BASIS OF INHERITANCE",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/11w3XxHmQTTpKr_xZlxEfZpLsV-xF9U-3?usp=drive_link",
                  },
                ],
              },
              {
                name: "EVOLUTION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/11x6oMIQK40wjdNceMIf0OjjDqaLI4pJf?usp=drive_link",
                  },
                ],
              },
              {
                name: "HUMAN HEALTH AND DISEASES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/121hXCkOZid_CiI7If4WN4E7XGyeUHyT8?usp=drive_link",
                  },
                ],
              },
              {
                name: "MICROBES IN HUMAN WELFARE",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/128iIhq5G7t7JbR3v4IjX6ULv062NiV4u?usp=drive_link",
                  },
                ],
              },
              {
                name: "BIOTECHNOLOGY - PRINCIPLES AND PROCESSES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/12VYRMDtMcYwa7RXpZ37dyKrRNWIH468f?usp=drive_link",
                  },
                ],
              },
              {
                name: "BIOTECHNOLOGY AND ITS APPLICATIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/12BXDYdKfaWttoIE-TTAKFKg7fjdCOJNw?usp=drive_link",
                  },
                ],
              },
              {
                name: "ORGANISMS AND POPULATIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/12M0DbXbM0PsBhWnN6pgQvu017f5uxQYx?usp=drive_link",
                  },
                ],
              },
              {
                name: "ECOSYSTEM",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/12MYGQpuytZk_dES7KMn6XbrXU8fVDeWX?usp=drive_link",
                  },
                ],
              },
              {
                name: "BIODIVERSITY AND ITS CONSERVATION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/12NwOdfgo5jIYnJM5T9n25tqvnDX6a09Z?usp=drive_link",
                  },
                ],
              },
            ],
          },
          {
            name: "Maths",
            chapters: [
              {
                name: "RELATIONS AND FUNCTIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/178cqqM8-tOE-C1Mb-3IMkSssX_Nw_hAY?usp=drive_link",
                  },
                ],
              },
              {
                name: "INVERSE TRIGONOMETRIC FUNCTIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1EDKu9l__anphfPKEgFe4JFFaCtFlusii?usp=drive_link",
                  },
                ],
              },
              {
                name: "MATRICES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1uigBryq2YHi24-j1uwua4ux52PPPIpS2?usp=drive_link",
                  },
                ],
              },
              {
                name: "DETERMINANTS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1RX9evz1i_EU3edfwxVVgrLBAYmAbwDsZ?usp=drive_link",
                  },
                ],
              },
              {
                name: "CONTINUITY AND DIFFERENTIABILITY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1IwCWFUBWZ0O1YSTwBO0kKfo5h8ld4izK?usp=drive_link",
                  },
                ],
              },
              {
                name: "APPLICATIONS OF DERIVATIVES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1-yqA6nBYT7WAkQASdCH1jQggFq89ONdu?usp=drive_link",
                  },
                ],
              },
              {
                name: "INTEGRALS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1S4LhyyPO90w9A7jJxFG9HeEdXZxaIYB1?usp=drive_link",
                  },
                ],
              },
              {
                name: "APPLICATIONS OF THE INTEGRALS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1IrqLR3dxtitDYCiFCRq71uPpN30QtpzZ?usp=drive_link",
                  },
                ],
              },
              {
                name: "DIFFERENTIAL EQUATIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1OfJorAVt2Xvg7lfazdyxJf-3wy_cx3fp?usp=drive_link",
                  },
                ],
              },
              {
                name: "VECTORS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1bAng2tS3g8NYXSCuiezs8feBifNs7qXn?usp=drive_link",
                  },
                ],
              },
              {
                name: "THREE - DIMENSIONAL GEOMETRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1tpofYpejOSpPCn77OG1kO9vzl15EuBon?usp=drive_link",
                  },
                ],
              },
              {
                name: "LINEAR PROGRAMMING",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1yaXce3H3f0RSAA5U_0M1dYz9u5KlrMYN?usp=drive_link",
                  },
                ],
              },
              {
                name: "PROBABILITY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1dd0jkaHbP9OY8Gqgpyn2pe84C_qeiWDu?usp=drive_link",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    category: "Boards IX-X",
    description: "Get study material for 9 - 10 Boards and ace your exam.",
    levels: [
      {
        name: "9",
        subjects: [
          {
            name: "Science",
            chapters: [
              {
                name: "MATTER IN OUR SURROUNDINGS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1Tt4Juk9tO2-FMauo_uW0sFU9yNbmgRND?usp=drive_link",
                  },
                ],
              },
              {
                name: "IS MATTER AROUND US PURE?",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1TuHhZ9Um11go-pES6vmbYgqMmIqJN--e?usp=drive_link",
                  },
                ],
              },
              {
                name: "ATOMS AND MOLECULES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1TvHsst4FIheKOy7l9xI6QwQQWMh_8u2T?usp=drive_link",
                  },
                ],
              },
              {
                name: "STRUCTURE OF THE ATOM",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1TuwTE2Iud5FVygI5hjnVJ0rf1pJ7bBR1?usp=drive_link",
                  },
                ],
              },
              {
                name: "THE FUNDAMENTAL UNIT OF LIFE",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1UA9DK2QCdau01Zd6v7I1AUzh9t6pS4Dj?usp=drive_link",
                  },
                ],
              },
              {
                name: "TISSUES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1UAi10PA-OZZxx5MX16KR1lOy8cvfHQCt?usp=drive_link",
                  },
                ],
              },
              {
                name: "MOTION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1Tvta7Wir1xddfty8KOJ4onLr1MTae2G7?usp=drive_link",
                  },
                ],
              },
              {
                name: "FORCE AND LAWS OF MOTION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1TxlVVhJYHaItBJz7jJX9MVPpsnajTHem?usp=drive_link",
                  },
                ],
              },
              {
                name: "GRAVITATION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1TzXkzpZm_cdjZpgVg8aOtuh4NMZ-VFcW?usp=drive_link",
                  },
                ],
              },
              {
                name: "WORK AND ENERGY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1U56GavNah5GZdpxH1T1btvzNjxA8Fb2P?usp=drive_link",
                  },
                ],
              },
              {
                name: "SOUND",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1U73hDAZ2EMgV-WCat_A0t7feoPMkfi41?usp=drive_link",
                  },
                ],
              },
              {
                name: "IMPROVEMENT IN FOOD RESOURCES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1UBpT0wU55AuhtcgZX_ecrJW0Mkh6REsZ?usp=drive_link",
                  },
                ],
              },
            ],
          },
          {
            name: "Maths",
            chapters: [
              {
                name: "NUMBER SYSTEMS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1APbqJEZKPHjv9q1XB7yDW_D6GTMC-5ZF?usp=drive_link",
                  },
                ],
              },
              {
                name: "POLYNOMIALS ",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1H2hapBak8cV9_OM6WmHd9YDIbg0sqLla?usp=drive_link",
                  },
                ],
              },
              {
                name: "COORDINATE GEOMETRY  ",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1rJkGZf3EqGzwMd2uVRt8CKiqvNV9HOmW?usp=drive_link",
                  },
                ],
              },
              {
                name: "LINEAR EQUATIONS IN TWO VARIABLES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/11Q0I3K4B8zdcCACRFp8C4RshW6ZKDeg4?usp=drive_link",
                  },
                ],
              },
              {
                name: "INTRODUCTION TO EUCLID’S GEOMETRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1xRMtgthUWxJVwPJK8rOeGzSJ64LseIGV?usp=drive_link",
                  },
                ],
              },
              {
                name: "LINES AND ANGLES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1fB0Bt09lMXZwxyMJ7lso3_C_SPpqyT5P?usp=drive_link",
                  },
                ],
              },
              {
                name: "TRIANGLES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1xlFDJ1jWsqILkEQozO29YEvzoQMEfo1n?usp=drive_link",
                  },
                ],
              },
              {
                name: "QUADRILATERALS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1o6XZOhJlotfJMSH5j1awESJPazM6hTlF?usp=drive_link",
                  },
                ],
              },
              {
                name: "CIRCLES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1CRSHw8iZts9cx-urOhdoktnu0emG_y6B?usp=drive_link",
                  },
                ],
              },
              {
                name: "HERON’S FORMULA",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/13NTZdI7qEE2rWWDpnCIIYqG6Qyx6F_rd?usp=drive_link",
                  },
                ],
              },
              {
                name: "SURFACE AREAS AND VOLUMES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/10fOOza1Lnu2Uz1msyzPzwEwbztYrjL9v?usp=drive_link",
                  },
                ],
              },
              {
                name: "STATISTICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1ZvJyFGAva4TJq2evkiZUnQip0P7Pa-1-?usp=drive_link",
                  },
                ],
              },
              {
                name: "PROBABILITY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1tyu0QNTFZGT8wlf5uIIK-9foSvBla1bY?usp=drive_link",
                  },
                ],
              },
            ],
          },
          {
            name: "SST",
            chapters: [],
          },
          {
            name: "English",
            chapters: [],
          },
          {
            name: "Hindi",
            chapters: [],
          },
          {
            name: "IP",
            chapters: [],
          },
        ],
      },
      {
        name: "10",
        subjects: [
          {
            name: "Science",
            chapters: [
              {
                name: "CHEMICAL REACTIONS AND EQUATIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1RFaHn5hGY9WiYXslpye8YAvGiXl1lC1a?usp=drive_link",
                  },
                ],
              },
              {
                name: "ACIDS, BASES AND SALTS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1RIE_YyUUCpkIw3y6ggyXsdujXD7bhEqh?usp=drive_link",
                  },
                ],
              },
              {
                name: "METALS AND NON-METALS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1RJCCrrWrAkI-QuqTZDQuapfE8u717XEY?usp=drive_link",
                  },
                ],
              },
              {
                name: "CARBON AND ITS COMPOUNDS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1RKPjVv45QZ5g1WLm20oD0RdA0cyrzMLT?usp=drive_link",
                  },
                ],
              },
              {
                name: "LIFE PROCESSES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1RL54necZhAi05i2eG58bGSnuVpDVZN3N?usp=drive_link",
                  },
                ],
              },
              {
                name: "CONTROL AND COORDINATION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1RLPhgGDBMSvKcIuI5_q24agwqUbWooWv?usp=drive_link",
                  },
                ],
              },
              {
                name: "HOW DO ORGANISMS REPRODUCE?",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1RLjdCdr_7_9K-4Lv9ZsCOYF0E5tWBLE-?usp=drive_link",
                  },
                ],
              },
              {
                name: "HEREDITY AND EVOLUTION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1ROeAORlfulkhB3kzEoOYgUvRBNONYcUB?usp=drive_link",
                  },
                ],
              },
              {
                name: "LIGHT – REFLECTION AND REFRACTION",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1RWh5AcJA3A09mAoFpSdpSa7j5Kr1IQFD?usp=drive_link",
                  },
                ],
              },
              {
                name: "THE HUMAN EYE AND THE COLOURFUL WORLD",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1Rd5WJlN5fC3usGFey6dD-W1V_sq4ZRLG?usp=drive_link",
                  },
                ],
              },
              {
                name: "ELECTRICITY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1RhbJGLXGmJnj4dmbPtPGXaYxvi24oDfH?usp=drive_link",
                  },
                ],
              },
              {
                name: "MAGNETIC EFFECTS OF ELECTRIC CURRENT",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1RlHTUV3y-tb7CTTM-p_Mw10rA3oArnSY?usp=drive_link",
                  },
                ],
              },
              {
                name: "OUR ENVIRONMENT",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1RpEyY39zgqnezY0K3l4g-SnzV-H4MNJH?usp=drive_link",
                  },
                ],
              },
            ],
          },
          {
            name: "Maths",
            chapters: [
              {
                name: "REAL NUMBERS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1NKEfFG7snLDn3HpayOlEZvUdxyas6_rH?usp=drive_link",
                  },
                ],
              },
              {
                name: "POLYNOMIALS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1NKLKeLKrH0F6htOLKClLXAFi_l39C2tR?usp=drive_link",
                  },
                ],
              },
              {
                name: "PAIR OF LINEAR EQUATIONS IN TWO VARIABLES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1NL3XsaJzBTS_PnTFQdZhME2kFjVkUVKu?usp=drive_link",
                  },
                ],
              },
              {
                name: "QUADRATIC EQUATIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1NTcfsbnQ_esnnqOokP8YsZFOVsEvYupA?usp=drive_link",
                  },
                ],
              },
              {
                name: "ARITHMETIC PROGRESSIONS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1NXqwGUJdytzv5MwpqssWX4SrpeNp8ckV?usp=drive_link",
                  },
                ],
              },
              {
                name: "TRIANGLES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1NYbhpsdHPHMq_GQBWBKqd9tK8ek8vS7h?usp=drive_link",
                  },
                ],
              },
              {
                name: "COORDINATE GEOMETRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1NYma9EShBGYg_qjl5VJDO8GWapZdYFGc?usp=drive_link",
                  },
                ],
              },
              {
                name: "INTRODUCTION TO TRIGONOMETRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1NcJgNcl2P7VUTjn-3DxxTbBAbv4RN9ce?usp=drive_link",
                  },
                ],
              },
              {
                name: "APPLICATIONS OF TRIGONOMETRY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1Ndc8GbZVjsf4OPd43sO8lCT3mUqsVTXY?usp=drive_link",
                  },
                ],
              },
              {
                name: "CIRCLES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1Ndq_Mkp3O2d8H4t70gd1TFLswrIdFPcV?usp=drive_link",
                  },
                ],
              },
              {
                name: "AREAS RELATED TO CIRCLES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1NfOq0Asdfo_DZx5TJjZFbDLj8QwxW8ZB?usp=drive_link",
                  },
                ],
              },
              {
                name: "SURFACE AREAS AND VOLUMES",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1Nf_XQAplXHkbeUgcpxgtZxTX8GvRsJbf?usp=drive_link",
                  },
                ],
              },
              {
                name: "STATISTICS",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1NkyXkUvaTtQPPaYGp3GxZnWtHu9etn7t?usp=drive_link",
                  },
                ],
              },
              {
                name: "PROBABILITY",
                resources: [
                  {
                    type: "Notes",
                    link: "https://drive.google.com/drive/folders/1NndvbWVT7WAdsEnr9_mFRNmEDRUTa2QH?usp=drive_link",
                  },
                ],
              },
            ],
          },
          {
            name: "SST",
            chapters: [],
          },
          {
            name: "English",
            chapters: [],
          },
          {
            name: "Hindi",
            chapters: [],
          },
          {
            name: "IP",
            chapters: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    category: "CUET",
    description: "Comprehensive guides and notes for CUET.",
    levels: [],
  },
];

export default coursesData;
