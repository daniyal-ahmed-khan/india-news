import React, { useEffect, useState } from "react";
import TopHeaderImg from "../../assets/TopHeader-img.svg";
import "./style/index.css";
import logo from "../../assets/logo.svg";
import { MdArrowDropDown } from "react-icons/md";
import { BiSolidSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useContext } from "react";
import { LanguageSelect, Loading } from "../../Context";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { API_URL } from "../../../API";
import { useNavigate } from "react-router-dom";
import { AutoComplete, Dropdown, Input } from "antd";
import { IoIosCloseCircle } from "react-icons/io";

const Header = () => {
  const [isHamBurger, setIsHamBurger] = useState(false);
  const [itsItem, setItsItem] = useState([]);
  const [itsItem2, setItsItem2] = useState([]);
  const { lang, setLang } = useContext(LanguageSelect);
  const { loading, setLoading, setEffect, effect } = useContext(Loading);
  const { t, i18n } = useTranslation();
  const [topAd, setTopAd] = useState({});
  const [search, setSearch] = useState(false);
  const Navigation = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/content?type=category`)
      .then((data) => {
        let arr = [];

        for (
          let index = 0;
          index < (data.data.length <= 10 ? Number(data.data.length) : 10);
          index++
        ) {
          const element = data.data[index];

          arr.push(element);
        }
        setItsItem(arr);

        let arr2 = [];

        for (let index = 0; index < data.data.length; index++) {
          const element = data.data[index];

          arr2.push({ value: element.text,key:element._id });
        }
        setItsItem2(arr2);

        setLoading(false);
      })

      .catch((err) => {
        setLoading(false);
      });

    axios.get(`${API_URL}/article`).then((res) => {
      console.log(res, "articlessss");

      let temp = [];

      for (let index = 0; index < res.data.length; index++) {
        const element = res.data[index];

        temp.push({ value: element.title,key:element._id });
      }

      for (let index = 0; index < res.data.length; index++) {
        const element = res.data[index];

        temp.push({ value: element.newsType,key:element._id });
      }

      console.log(temp, "tempppppppp");
      setItsItem2(prev => [...prev, ...temp]);
    });
    axios.get(`${API_URL}/ads?active=true&side=top`).then((data) => {
      setTopAd(data.data.reverse()[0]);
    });
  }, []);
  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="header-main-area">
          <div style={{ position: "relative" }}>
            <a href={topAd?.link} target="_blank" className="top-header-img">
              <img
                style={{ cursor: "pointer" }}
                className="top-header-img"
                src={topAd?.imgLink}
                alt=""
              />
            </a>
            {/* <img src={TopHeaderImg} alt="" " /> */}
            <select
              name="language"
              id=""
              style={{ width: 100, position: "absolute", right: 10, top: 10 }}
              onChange={(e) => {
                i18n.changeLanguage(e.target.value);
              }}
            >
              <option value="en">English</option>
              <option value="ur">Urdu</option>
              <option value="hi">Hindi</option>
            </select>
          </div>
          <div className="header-contianer">
            <div
              onClick={() => Navigation("/")}
              style={{ cursor: "pointer" }}
              className="header-logo-box"
            >
              <img src={logo} alt="" />
            </div>
            <div className="header-row-box">
              <ul className="header-row-box-items">
                {itsItem.length > 0 &&
                  itsItem.map((data) => {
                    let arr = [];
                    // let item = [];
                    axios
                      .get(`${API_URL}/subcategory?category=${data.text}`)
                      .then((response) => {
                        const subcategories = response.data;
                        for (let i = 0; i < subcategories.length; i++) {
                          const subcategory = subcategories[i];
                          arr.push({
                            key: subcategory._id,
                            label: (
                              <a
                                target="_blank"
                                onClick={() => {
                                  Navigation(
                                    `/itempage?item=${subcategory.category}&sub=${subcategory.text}`
                                  );
                                  setEffect(!effect);
                                }}
                              >
                                {subcategory.text}
                              </a>
                            ),
                          });
                        }
                      });

                    // Function to reload the page
                    const refreshPage = () => {
                      window.location.reload(true);
                    };
                    return (
                      <Dropdown
                        key={data._id}
                        menu={{
                          items: arr,
                        }}
                        placement="bottom"
                        arrow
                      >
                        <li
                          onClick={() => {
                            Navigation(`/itempage?item=${data.text}`);
                            refreshPage();
                            setEffect(!effect);
                          }}
                        >
                          {data.text} <MdArrowDropDown size={20} />
                        </li>
                      </Dropdown>
                    );
                  })}
                <li onClick={() => Navigation("/live")}>{t("h14")}</li>
                <li>
                  <BiSolidSearch
                    onClick={() => {
                      setSearch(true);
                    }}
                    size={30}
                    color="white"
                    style={{
                      marginLeft: "10px",
                    }}
                  />
                </li>
              </ul>
              <GiHamburgerMenu
                className="ham-burger"
                size={30}
                color="white"
                onClick={() => setIsHamBurger(true)}
              />
            </div>
          </div>
          <div
            className={`ham-burger-area `}
            style={{ display: isHamBurger ? "block" : "none" }}
          >
            <div className="header-row2-icons">
              <BiSolidSearch size={30} color="white" />
              <RxCross1
                size={30}
                color="white"
                onClick={() => setIsHamBurger(false)}
                className="ham-burger-area-cross-child"
              />
            </div>
            <ul className="header-row-box-items2">
              {itsItem.length > 0 &&
                itsItem.map((data) => {
                  return (
                    <li
                      key={data._id}
                      onClick={() => {
                        Navigation(`/itempage?item=${data.text}`);
                        setEffect(!effect);
                      }}
                    >
                      {data.text} <MdArrowDropDown size={20} />
                    </li>
                  );
                })}
              <li>
                live <MdArrowDropDown size={30} />
              </li>
            </ul>
          </div>
        </div>
      )}
      {search ? (
        <div
          onClick={() => {
            // setSearch(false);
          }}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.2)",
            position: "absolute",
            zIndex: 10,
            top: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%", height: "100%" }}>
            <div>
              <IoIosCloseCircle
                onClick={() => setSearch(false)}
                size={40}
                style={{ marginLeft: 10, marginTop: 10, cursor: "pointer" }}
              />
            </div>
            <AutoComplete
              style={{
                width: "70%",
                marginTop: 20,
                marginLeft: 180,
              }}
              options={itsItem2}
              // placeholder="try to type `b`"
              filterOption={(inputValue, option) =>
                option.value
                  ?.toUpperCase()
                  .indexOf(inputValue.toUpperCase()) !== -1
              }
            >
              <Input.Search
                autoFocus
                size="large"
                placeholder="Search"
                enterButton
                onSearch={(e) => {
                  Navigation(`itempage?item=${e}`);
                  setSearch(false);
                }}
              />
            </AutoComplete>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
