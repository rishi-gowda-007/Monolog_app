import React from 'react';
import './MessageHistory.css';

function MessageHistory({ data }) {
  return (
    <div id='mh_main'>
      <h1 style={{color:'#CA3608'}}>Message History</h1>
      <table>
        <thead>
          <tr>
            {data[0] && Object.keys(data[0]).map((header, index) => <th key={index}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MessageHistory;
