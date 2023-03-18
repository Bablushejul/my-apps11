import React from "react";
import './HomeBody.css'
import { Button } from "react-bootstrap";

const HomeBody = () => {
  return (
    <div className="homebody">
      <table>
        <tbody>
          <tr>
            <td>JUL16</td>

            <td>DETROIT,MI</td>

            <td>DTE ENERGY MUSIC THEATRE</td>

            <td>
              <Button variant="info">BUY TICKETS</Button>
            </td>
          </tr>

          <tr>
            <td>JUL 19</td>

            <td>TORONTO,ON</td>

            <td>BUDWEISER STAGE</td>

            <td>
              <Button variant="info">BUY TICKETS</Button>
            </td>
          </tr>

          <tr>
            <td>JUL 22</td>

            <td>BRISTOW,VA</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <Button variant="info">BUY TICKETS</Button>
            </td>
          </tr>

          <tr>
            <td>JUL 29</td>

            <td>PHOENIX,AZ</td>

            <td>AK-CHIN PAVILION</td>

            <td>
              <Button variant="info">BUY TICKETS</Button>
            </td>
          </tr>

          <tr>
            <td>AUG 2</td>

            <td>LAS VEGAS,NV</td>

            <td>T-MOBILE ARENA</td>

            <td>
              <Button variant="info">BUY TICKETS</Button>
            </td>
          </tr>

          <tr>
            <td>AUG 7</td>
            <td>CONCORD,CA</td>
            <td>CONCORD PAVILION</td>
            <td>
              <Button variant="info">BUY TICKETS</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomeBody;
