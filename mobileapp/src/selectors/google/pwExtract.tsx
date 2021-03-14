/*
 *
 *   Copyright (C) 2021 Seknox Pte Ltd.
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

const PWExtract = `

const waitForPWField = setInterval(function(){
var form = document.querySelector('form[id="challenge"]');
  if (!form) {
    return;
  };
  

  clearInterval(waitForPWField);

  const defaultAction =form.onsubmit;
  form.onsubmit = function () {

      let usernameField = document.querySelector('#identifier-display');
      if(!usernameField){
      document.querySelector('#identifierId');
      }
      
      const passwordField = document.querySelector('#password');
      if(!passwordField){
      document.querySelector('input[name="password"]');
      }
      
      const email = usernameField.innerText;
      const password = passwordField.value;
      
      

      const msg = {
        type: 'LOGIN_SUCCESS',
        content: { email,password },
      };
      window.ReactNativeWebView.postMessage(JSON.stringify(msg));
      defaultAction();

    };
},1000);

  
  
`;

export default PWExtract;
