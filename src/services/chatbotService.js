require("dotenv").config();
import request from "request";

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

const IMAGE_GET_STARTED = "https://bit.ly/3RLirYk";
const IMAGE_CAPACITY = "https://images2.alphacoders.com/862/862730.jpg";
const IMAGE_MAIN_MENU =
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80";
const IMAGE_OPEN_HOURS =
  "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay0xNDUtcG9tLTkwMzguanBn.jpg?s=2z5d7tmbSzVPR3JhSBoDAza-iVHm2yxwqIzBhDqMBHw";
const IMAGE_APPETIZERS =
  "https://media.istockphoto.com/photos/arabic-traditional-cuisine-middle-eastern-meze-with-pita-olives-picture-id1271870386?b=1&k=20&m=1271870386&s=170667a&w=0&h=LLVRJx6rfY908-_HZlNnhB3tmNuKV63qvK6oYb3dMEk=";
const IMAGE_MAIN_COURSES =
  "https://c1.wallpaperflare.com/preview/389/320/853/suckling-pig-gourmet-menu-eat.jpg";
const IMAGE_DESSERTS =
  "https://media.istockphoto.com/photos/strawberry-parfait-dessert-in-a-glass-cup-with-cream-and-chocola-picture-id1252319556?b=1&k=20&m=1252319556&s=170667a&w=0&h=HKBhT-jvzoQUAKz4YhK_FExjmBKzOLwPJywDRy-5zxA=";
const IMAGE_BACK_TO_MAIN_MENUS =
  "https://upserve.com/media/sites/2/restaurant-menu-design-small-restaurants.jpg";
const IMAGE_VIEW_APPETIZER_1 =
  "https://img.apmcdn.org/74ac9b732d3043807e7caeee51dccab773bd376f/uncropped/5e8852-splendid-table-improvised-soups-c-ozgurcoskun-istock-gettyimages-595731814-lede.jpg";
const IMAGE_VIEW_APPETIZER_2 =
  "https://media.eggs.ca/assets/RecipeThumbs/_resampled/FillWyIxMjgwIiwiNzIwIl0/chopped-chef-salad.jpg";
const IMAGE_VIEW_APPETIZER_3 =
  "https://cdn.vox-cdn.com/thumbor/3m7uQhwDWw1XbhDFJN072xfu5LI=/0x0:2048x1365/1200x900/filters:focal(861x520:1187x846)/cdn.vox-cdn.com/uploads/chorus_image/image/59949587/Swift___Sons_Cold_Platter.0.jpg";

const IMAGE_MAIN_COURSE_1 =
  "https://foodal.com/wp-content/uploads/2015/06/Is-Grilling-the-Healthiest-Cooking-Method.jpg";
const IMAGE_MAIN_COURSE_2 =
  "https://www.lacademie.com/wp-content/uploads/2022/02/types-of-sushi.jpg";
const IMAGE_MAIN_COURSE_3 =
  "https://media-cdn.tripadvisor.com/media/photo-s/09/a3/48/07/mandarin-restaurant.jpg";

const IMAGE_VIEW_DESSERT_1 =
  "https://www.marathonsandmotivation.com/wp-content/uploads/2021/05/No_Bake_Cherry_Cheesecake_15.jpg";
const IMAGE_VIEW_DESSERT_2 =
  "https://hips.hearstapps.com/hmg-prod/images/delish-coconut-cream-pie-2-017-1544565155.jpg";
const IMAGE_VIEW_DESSERT_3 =
  "http://www.dvo.com/recipe_pages/ultimate/Chocolate_Fudge_Dream_Cake.jpg";

const IMAGE_ROOMS_DETAIL = "https://i.gifer.com/NAWM.gif";

const IMAGE_GIF_WELCOME =
  "https://media3.giphy.com/media/4VlbCwmZlV2U0/giphy.gif?cid=ecf05e47ikq59q3gstsk74b6idk4je69wlb7urzhhfxy1504&rid=giphy.gif&ct=g";

let callSendAPI = async (sender_psid, response) => {
  // Construct the message body
  let request_body = {
    recipient: {
      id: sender_psid,
    },
    message: response,
  };

  await sendMarkReadMessage(sender_psid);
  await sendTypingOn(sender_psid);

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

let sendTypingOn = (sender_psid) => {
  // Construct the message body
  let request_body = {
    recipient: {
      id: sender_psid,
    },
    sender_action: "typing_on",
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
        console.log("sendTypingOn sent!");
      } else {
        console.error("Unable to send sendTypingOn:" + err);
      }
    }
  );
};

let sendMarkReadMessage = (sender_psid) => {
  // Construct the message body
  let request_body = {
    recipient: {
      id: sender_psid,
    },
    sender_action: "mark_seen ",
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
        console.log("sendTypingOn sent!");
      } else {
        console.error("Unable to send sendTypingOn:" + err);
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
      // let response2 = getStartedTemplate(sender_psid);

      // send an image
      let response2 = getImageStartedTemplate();

      let response3 = getStartedQuickReplyTemplate(sender_psid);

      // send text message
      await callSendAPI(sender_psid, response1);

      // send an image
      await callSendAPI(sender_psid, response2);

      // send a quick reply
      await callSendAPI(sender_psid, response3);

      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};

let getStartedTemplate = (senderID) => {
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
                type: "web_url",
                url: `${process.env.URL_WEB_VIEW_ORDER}/${senderID}`,
                title: "RESERVE A TABLE",
                webview_height_ratio: "tall",
                messenger_extensions: true, //false: open the webview in a new tab
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

let getImageStartedTemplate = () => {
  let response = {
    attachment: {
      type: "image",
      payload: {
        url: IMAGE_GIF_WELCOME,
        is_reusable: true,
      },
    },
  };

  return response;
};

let getStartedQuickReplyTemplate = () => {
  let response = {
    text: "Please pick an option below!",
    quick_replies: [
      {
        content_type: "text",
        title: "MAIN MENUS",
        payload: "MAIN_MENU",
      },
      {
        content_type: "text",
        title: "RESERVE A TABLE",
        payload: "<POSTBACK_PAYLOAD>",
      },
      {
        content_type: "text",
        title: "CHATBOT GUIDELINES",
        payload: "CHATBOT_GUIDELINES",
      },
    ],
  };

  return response;
};

let handleSendMainMenu = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response1 = getMainMenuTemplate(sender_psid);

      // send text message
      await callSendAPI(sender_psid, response1);

      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};

let getMainMenuTemplate = (senderID) => {
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
                type: "web_url",
                url: `${process.env.URL_WEB_VIEW_ORDER}/${senderID}`,
                title: "RESERVE A TABLE",
                webview_height_ratio: "tall",
                messenger_extensions: true, //false: open the webview in a new tab
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
            image_url: IMAGE_APPETIZERS,
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
            image_url: IMAGE_MAIN_COURSES,
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
            image_url: IMAGE_DESSERTS,
            buttons: [
              {
                type: "postback",
                title: "SEE DETAILS",
                payload: "VIEW_DESSERTS",
              },
            ],
          },
          {
            title: "Go back",
            subtitle: "Go back to the main menus",
            image_url: IMAGE_BACK_TO_MAIN_MENUS,
            buttons: [
              {
                type: "postback",
                title: "GO BACK",
                payload: "BACK_TO_MAIN_MENUS",
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
            title: "Appetizers",
            subtitle: "Delicous appetizers",
            image_url: IMAGE_APPETIZERS,
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
            image_url: IMAGE_MAIN_COURSES,
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
            image_url: IMAGE_DESSERTS,
            buttons: [
              {
                type: "postback",
                title: "SEE DETAILS",
                payload: "VIEW_DESSERTS",
              },
            ],
          },
          {
            title: "Go back",
            subtitle: "Go back to the main menus",
            image_url: IMAGE_BACK_TO_MAIN_MENUS,
            buttons: [
              {
                type: "postback",
                title: "GO BACK",
                payload: "BACK_TO_MAIN_MENUS",
              },
            ],
          },
        ],
      },
    },
  };

  return response;
};

let handleBackToMainMenus = async (sender_psid) => {
  await handleSendMainMenu(sender_psid);
};

let getViewAppetizerTemplate = () => {
  let response = {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "Soups",
            subtitle:
              "Wonton soup, Hot and sour soup, Egg drop with mushroom soup",
            image_url: IMAGE_VIEW_APPETIZER_1,
          },
          {
            title: "Salad",
            subtitle: "Wide range of salads with dressings",
            image_url: IMAGE_VIEW_APPETIZER_2,
          },
          {
            title: "Chilled seafood",
            subtitle: "Shrimps or Kiwi mussels",
            image_url: IMAGE_VIEW_APPETIZER_3,
          },
          {
            title: "Go back",
            subtitle: "Go back to main menu",
            image_url: IMAGE_BACK_TO_MAIN_MENUS,
            buttons: [
              {
                type: "postback",
                title: "BACK TO MAIN MENUS",
                payload: "BACK_TO_MAIN_MENUS",
              },
            ],
          },
        ],
      },
    },
  };

  return response;
};

let handleViewAppetizers = async (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response1 = getViewAppetizerTemplate();

      // send text message
      await callSendAPI(sender_psid, response1);

      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};

let getViewMainCourseTemplate = () => {
  let response = {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "Grill",
            subtitle: "BBQ spare ribs, Stacked beef, Pizza etc.",
            image_url: IMAGE_MAIN_COURSE_1,
          },
          {
            title: "Sushi",
            subtitle: "California rolls, Vegetable spring rolls etc.",
            image_url: IMAGE_MAIN_COURSE_2,
          },
          {
            title: "Hot food",
            subtitle:
              "Vegetable fried rice, Shanghai noodles, Lemon chicken, Torpedo shrimp etc.",
            image_url: IMAGE_MAIN_COURSE_3,
          },
          {
            title: "Go back",
            subtitle: "Go back to main menu",
            image_url: IMAGE_BACK_TO_MAIN_MENUS,
            buttons: [
              {
                type: "postback",
                title: "BACK TO MAIN MENUS",
                payload: "BACK_TO_MAIN_MENUS",
              },
            ],
          },
        ],
      },
    },
  };

  return response;
};

let handleViewMainCourses = async (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response1 = getViewMainCourseTemplate();

      // send text message
      await callSendAPI(sender_psid, response1);

      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};

let getViewDessertTemplate = () => {
  let response = {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "Cherry cheesecake",
            subtitle: "$5",
            image_url: IMAGE_VIEW_DESSERT_1,
          },
          {
            title: "Coconut cream pie",
            subtitle: "$2",
            image_url: IMAGE_VIEW_DESSERT_2,
          },
          {
            title: "Chocolate dream",
            subtitle: "$6",
            image_url: IMAGE_VIEW_DESSERT_3,
          },
          {
            title: "Go back",
            subtitle: "Go back to main menu",
            image_url: IMAGE_BACK_TO_MAIN_MENUS,
            buttons: [
              {
                type: "postback",
                title: "BACK TO MAIN MENUS",
                payload: "BACK_TO_MAIN_MENUS",
              },
            ],
          },
        ],
      },
    },
  };

  return response;
};

let handleViewDesserts = async (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response1 = getViewDessertTemplate();

      // send text message
      await callSendAPI(sender_psid, response1);

      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};

let getImageRoomTemplate = () => {
  let response = {
    attachment: {
      type: "image",
      payload: {
        url: IMAGE_ROOMS_DETAIL,
        is_reusable: true,
      },
    },
  };
  return response;
};

let getButtonRoomsTemplate = (senderID) => {
  let response = {
    attachment: {
      type: "template",
      payload: {
        template_type: "button",
        text: "Our capacity is up 500 seated guests at the same time.",
        buttons: [
          {
            type: "web_url",
            url: `${process.env.URL_WEB_VIEW_ORDER}/${senderID}`,
            title: "RESERVE A TABLE",
            webview_height_ratio: "tall",
            messenger_extensions: true, //false: open the webview in a new tab
          },
          {
            type: "postback",
            title: "MAIN MENU",
            payload: "MAIN_MENU",
          },
        ],
      },
    },
  };

  return response;
};

let handleShowRoomsDetail = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      // send an image
      let response1 = getImageRoomTemplate(sender_psid);

      // send a button template : text, buttons
      let response2 = getButtonRoomsTemplate(sender_psid);

      // send text message
      await callSendAPI(sender_psid, response1);
      await callSendAPI(sender_psid, response2);

      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  handleGetStarted: handleGetStarted,
  handleSendMainMenu: handleSendMainMenu,
  handleSendBrunchMenu: handleSendBrunchMenu,
  handleSendDinnerMenu: handleSendDinnerMenu,
  handleBackToMainMenus: handleBackToMainMenus,
  handleViewAppetizers: handleViewAppetizers,
  handleViewMainCourses: handleViewMainCourses,
  handleViewDesserts: handleViewDesserts,
  handleShowRoomsDetail: handleShowRoomsDetail,
  callSendAPI: callSendAPI,
  getUserName: getUserName,
};
