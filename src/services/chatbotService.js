require("dotenv").config();
import request from "request";

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

const IMAGE_GET_STARTED = "https://bit.ly/3RLirYk";
const IMAGE_CAPACITY = "https://images2.alphacoders.com/862/862730.jpg";
const IMAGE_MAIN_MENU =
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80";
const IMAGE_OPEN_HOURS =
  "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay0xNDUtcG9tLTkwMzguanBn.jpg?s=2z5d7tmbSzVPR3JhSBoDAza-iVHm2yxwqIzBhDqMBHw";

let callSendAPI = (sender_psid, response) => {
  // Construct the message body
  let request_body = {
    recipient: {
      id: sender_psid,
    },
    message: response,
  };

  // Send the HTTP request to the Messenger Platform
  request(
    {
      uri: "https://graph.facebook.com/v9.0/me/messages",
      qs: { access_token: PAGE_ACCESS_TOKEN },
      method: "POST",
      json: request_body,
    },
    (err, res, body) => {
      if (!err) {
        console.log("message sent!");
      } else {
        console.error("Unable to send message:" + err);
      }
    }
  );
};

let getUserName = (sender_psid) => {
  return new Promise((resolve, reject) => {
    request(
      {
        uri: `https://graph.facebook.com/${sender_psid}?fields=first_name,last_name,profile_pic&access_token=${PAGE_ACCESS_TOKEN}`,
        method: "GET",
      },
      (err, res, body) => {
        if (!err) {
          body = JSON.parse(body);
          let username = `${body.first_name} ${body.last_name}`;
          resolve(username);
        } else {
          console.error("Unable to send message:" + err);
          reject(err);
        }
      }
    );
  });
};

let handleGetStarted = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let username = await getUserName(sender_psid);
      let response1 = { text: `Welcome ${username} to CocoMan restaurant!` };
      let response2 = getStartedTemplate();

      // send text message
      await callSendAPI(sender_psid, response1);

      // send generic template message
      await callSendAPI(sender_psid, response2);

      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};

let getStartedTemplate = () => {
  let response = {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "Welcome to CocoMan restaurant!",
            subtitle: "Please pick an option below!",
            image_url: IMAGE_GET_STARTED,
            buttons: [
              {
                type: "postback",
                title: "MAIN MENU",
                payload: "MAIN_MENU",
              },
              {
                type: "postback",
                title: "RESERVE A TABLE",
                payload: "RESERVE_A_TABLE",
              },
              {
                type: "postback",
                title: "CHATBOT GUIDELINES",
                payload: "CHATBOT_GUIDELINES",
              },
            ],
          },
        ],
      },
    },
  };

  return response;
};

let handleSendMainMenu = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response1 = getMainMenuTemplate();

      // send text message
      await callSendAPI(sender_psid, response1);

      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};

let getMainMenuTemplate = () => {
  let response = {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "Our menus",
            subtitle:
              "We are pleased to offer you a wide range of menus for brunch and dinner",
            image_url: IMAGE_MAIN_MENU,
            buttons: [
              {
                type: "postback",
                title: "BRUNCH",
                payload: "BRUNCH_MENU",
              },
              {
                type: "postback",
                title: "DINNER",
                payload: "DINNER_MENU",
              },
            ],
          },
          {
            title: "Open hours",
            subtitle: "SUN-THU 11AM - 10PM | FRI-SAT 11AM - 11PM",
            image_url: IMAGE_OPEN_HOURS,
            buttons: [
              {
                type: "postback",
                title: "RESERVE A TABLE",
                payload: "RESERVE_A_TABLE",
              },
            ],
          },
          {
            title: "Capacity",
            subtitle:
              "CocoMan accommodates up to 350 seated guests and serves big parties",
            image_url: IMAGE_CAPACITY,
            buttons: [
              {
                type: "postback",
                title: "SHOW ROOMS",
                payload: "SHOW_ROOMS",
              },
            ],
          },
        ],
      },
    },
  };

  return response;
};

let handleSendBrunchMenu = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response1 = getBrunchMenuTemplate();

      // send text message
      await callSendAPI(sender_psid, response1);

      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};

let getBrunchMenuTemplate = () => {
  let response = {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "Appetizers",
            subtitle: "Delicous appetizers",
            image_url: IMAGE_MAIN_MENU,
            buttons: [
              {
                type: "postback",
                title: "SEE DETAILS",
                payload: "VIEW_APPETIZERS",
              },
            ],
          },
          {
            title: "Main courses",
            subtitle: "A wide range of main courses",
            image_url: IMAGE_OPEN_HOURS,
            buttons: [
              {
                type: "postback",
                title: "SEE DETAILS",
                payload: "VIEW_MAIN_COURSES",
              },
            ],
          },
          {
            title: "Desserts",
            subtitle: "Amazing desserts",
            image_url: IMAGE_CAPACITY,
            buttons: [
              {
                type: "postback",
                title: "SEE DETAILS",
                payload: "VIEW_DESSERTS",
              },
            ],
          },
        ],
      },
    },
  };

  return response;
};

let handleSendDinnerMenu = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response1 = getDinnerMenuTemplate();

      // send text message
      await callSendAPI(sender_psid, response1);

      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};

let getDinnerMenuTemplate = () => {
  let response = {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "Our menus",
            subtitle:
              "We are pleased to offer you a wide range of menus for brunch and dinner",
            image_url: IMAGE_MAIN_MENU,
            buttons: [
              {
                type: "postback",
                title: "BRUNCH",
                payload: "BRUNCH_MENU",
              },
              {
                type: "postback",
                title: "DINNER",
                payload: "DINNER_MENU",
              },
            ],
          },
          {
            title: "Open hours",
            subtitle: "SUN-THU 11AM - 10PM | FRI-SAT 11AM - 11PM",
            image_url: IMAGE_OPEN_HOURS,
            buttons: [
              {
                type: "postback",
                title: "RESERVE A TABLE",
                payload: "RESERVE_A_TABLE",
              },
            ],
          },
          {
            title: "Capacity",
            subtitle:
              "CocoMan accommodates up to 350 seated guests and serves big parties",
            image_url: IMAGE_CAPACITY,
            buttons: [
              {
                type: "postback",
                title: "SHOW ROOMS",
                payload: "SHOW_ROOMS",
              },
            ],
          },
        ],
      },
    },
  };

  return response;
};

module.exports = {
  handleGetStarted: handleGetStarted,
  handleSendMainMenu: handleSendMainMenu,
  handleSendBrunchMenu: handleSendBrunchMenu,
  handleSendDinnerMenu: handleSendDinnerMenu,
};
