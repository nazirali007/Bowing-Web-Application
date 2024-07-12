import React from "react";
import activeLeaqueCSS from "./ActiveLeque.Css/ActiveLeaque.module.css";
import PaginationComponent from "../CommonComponents/Pagination";
import { FiEdit2 } from "react-icons/fi";
import dayjs from "dayjs";

const TableComponents = ({ data, editbtn }) => {
  // console.log(data.data.alleyLeagues);
  return (
    <div className={activeLeaqueCSS.container}>
      <table className={activeLeaqueCSS.tableContainer}>
        <thead>
          <tr>
            <th style={{ width: "5%" }} scope="col">
              #
            </th>
            <th style={{ width: "15%" }} scope="col">
              Leaque Name
            </th>
            <th style={{ width: "10%" }} scope="col">
              Format{" "}
            </th>
            <th style={{ width: "30%", paddingLeft: "50px" }} scope="col">
              Description
            </th>
            <th style={{ width: "10%" }} scope="col">
              Team
            </th>
            <th style={{ width: "15%" }} scope="col">
              Starting On
            </th>
            {editbtn ? (
              <>
                <th style={{ width: "10%" }} scope="col">
                  Action
                </th>
              </>
            ) : (
              <></>
            )}
          </tr>
        </thead>
        <tbody className={activeLeaqueCSS.tablebody}>
          {/* {data ? (
            <>
              {data.data.alleyLeagues.map((item, index) => {
                const { leagueName, typeOfLeague, description, startDate } =
                  item;
                return (
                  <tr>
                    <td style={{ width: "5%" }} scope="col">
                      {index + 1}
                    </td>
                    <td style={{ width: "15%" }} scope="col">
                      {item?.leagueName}
                    </td>
                    <td style={{ width: "10%" }} scope="col">
                      {item?.typeOfLeague}
                    </td>
                    <td style={{ width: "30%" }} scope="col">
                      {item?.description}
                    </td>
                    <td
                      style={{ width: "10%", paddingLeft: "5px" }}
                      scope="col"
                    >
                      {item?.matchPerTeam}/
                      <span style={{ color: " rgb(133, 219, 72)" }}>
                        {item?.numberOfTeam}
                      </span>
                    </td>
                    <td style={{ width: "15%", cursor: "pointer" }} scope="col">
                      Time:
                      {dayjs(item?.startDate).format("HH:MM ")} <br />
                      {dayjs(item?.startDate).format("DD MMMM YYYY")}
                    </td>

                    {editbtn ? (
                      <>
                        <td style={{ width: "10%" }} scope="col">
                          <FiEdit2 />
                          Edit
                        </td>
                      </>
                    ) : (
                      <></>
                    )}
                  </tr>
                );
              })}
            </>
          ) : (
            <></>
          )} */}

          <tr>
            <td style={{ width: "5%" }} scope="col">
              1
            </td>
            <td style={{ width: "15%" }} scope="col">
              Perfect Stricke
            </td>
            <td style={{ width: "10%" }} scope="col">
              Quard
            </td>
            <td style={{ width: "30%" }} scope="col">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
              labore.
            </td>
            <td style={{ width: "10%", paddingLeft: "5px" }} scope="col">
              15/50
              <span style={{ color: " rgb(133, 219, 72)" }}></span>
            </td>
            <td style={{ width: "15%", cursor: "pointer" }} scope="col">
              <b>Time :16:04</b>
              <b>Date :14/July/2021</b>
            </td>

            {editbtn ? (
              <>
                <td style={{ width: "10%" }} scope="col">
                  <FiEdit2 />
                  Edit
                </td>
              </>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            <td style={{ width: "5%" }} scope="col">
              2
            </td>
            <td style={{ width: "15%" }} scope="col">
              Perfect Stricke
            </td>
            <td style={{ width: "10%" }} scope="col">
              Quard
            </td>
            <td style={{ width: "30%" }} scope="col">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
              labore.
            </td>
            <td style={{ width: "10%", paddingLeft: "5px" }} scope="col">
              15/50
              <span style={{ color: " rgb(133, 219, 72)" }}></span>
            </td>
            <td style={{ width: "15%", cursor: "pointer" }} scope="col">
              <b>Time :16:04</b>
              <b>Date :14/July/2021</b>
            </td>

            {editbtn ? (
              <>
                <td style={{ width: "10%" }} scope="col">
                  <FiEdit2 />
                  Edit
                </td>
              </>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            <td style={{ width: "5%" }} scope="col">
              3
            </td>
            <td style={{ width: "15%" }} scope="col">
              Perfect Stricke
            </td>
            <td style={{ width: "10%" }} scope="col">
              Quard
            </td>
            <td style={{ width: "30%" }} scope="col">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
              labore.
            </td>
            <td style={{ width: "10%", paddingLeft: "5px" }} scope="col">
              15/50
              <span style={{ color: " rgb(133, 219, 72)" }}></span>
            </td>
            <td style={{ width: "15%", cursor: "pointer" }} scope="col">
              <b>Time :16:04</b>
              <b>Date :14/July/2021</b>
            </td>

            {editbtn ? (
              <>
                <td style={{ width: "10%" }} scope="col">
                  <FiEdit2 />
                  Edit
                </td>
              </>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            <td style={{ width: "5%" }} scope="col">
              4
            </td>
            <td style={{ width: "15%" }} scope="col">
              Perfect Stricke
            </td>
            <td style={{ width: "10%" }} scope="col">
              Quard
            </td>
            <td style={{ width: "30%" }} scope="col">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
              labore.
            </td>
            <td style={{ width: "10%", paddingLeft: "5px" }} scope="col">
              15/50
              <span style={{ color: " rgb(133, 219, 72)" }}></span>
            </td>
            <td style={{ width: "15%", cursor: "pointer" }} scope="col">
              <b>Time :16:04</b>
              <b>Date :14/July/2021</b>
            </td>

            {editbtn ? (
              <>
                <td style={{ width: "10%" }} scope="col">
                  <FiEdit2 />
                  Edit
                </td>
              </>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            <td style={{ width: "5%" }} scope="col">
              5
            </td>
            <td style={{ width: "15%" }} scope="col">
              Perfect Stricke
            </td>
            <td style={{ width: "10%" }} scope="col">
              Quard
            </td>
            <td style={{ width: "30%" }} scope="col">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
              labore.
            </td>
            <td style={{ width: "10%", paddingLeft: "5px" }} scope="col">
              15/50
              <span style={{ color: " rgb(133, 219, 72)" }}></span>
            </td>
            <td style={{ width: "15%", cursor: "pointer" }} scope="col">
              <b>Time :16:04</b>
              <b>Date :14/July/2021</b>
            </td>

            {editbtn ? (
              <>
                <td style={{ width: "10%" }} scope="col">
                  <FiEdit2 />
                  Edit
                </td>
              </>
            ) : (
              <></>
            )}
          </tr>
          <tr>
            <td colSpan={6}>
              <PaginationComponent />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponents;
