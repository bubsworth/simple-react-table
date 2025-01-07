import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";

export const Table = () => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Page</th>
            <th className="expand">Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Home</td>
            <td>This is the main page</td>
            <td>
              <span className="label label-live">Live</span>
            </td>
            <td>
              <span className="actions">
                <BsFillTrashFill className="delete-bin" />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
          <tr>
            <td>Page 2</td>
            <td>This is the Secondary page</td>
            <td>
              <span className="label label-draft">Draft</span>
            </td>
            <td>
              <span className="actions">
                <BsFillTrashFill className="delete-bin" />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
          <tr>
            <td>Page 3</td>
            <td>This is the third page</td>
            <td>
              <span className="label label-error">Error</span>
            </td>
            <td>
              <span className="actions">
                <BsFillTrashFill className="delete-bin" />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
