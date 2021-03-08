/*
 *
 *   Copyright (C) 2020 Seknox Pte Ltd.
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Affero General Public License as
 *   published by the Free Software Foundation, either version 3 of the
 *   License, or (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Affero General Public License for more details.
 *
 *   You should have received a copy of the GNU Affero General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */

//https://account.microsoft.com/privacy/cortana

function extractCortanaData(htmlContent: string) {
  return new Promise((resolve, reject) => {
    resolve('');
  });
}

const fixFunc = `
  document.querySelector("p[mee-paragraph=para3] > button").click();
  setTimeout(function(){
      document.querySelectorAll("button[mee-button=flex]").forEach(function(btn){
    if(btn.innerText==="Clear"){
        //console.info(btn);

        btn.click();
        }
    })

  
  })

    `;

export const CortanaData = {
  name: 'Cortana Data',
  pageURL: 'https://account.microsoft.com/privacy/cortana',
  tasks: [
    {
      extractFunc: extractCortanaData,
      type: 'PRIVACY',
      name: 'Cortana Data',
      expectedValue: ' ',
      fixFunc: fixFunc,
      fixURL: 'https://account.microsoft.com/privacy/cortana',
    },
  ],
};
