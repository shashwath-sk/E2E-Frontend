export const BACKEND_URL = 'http://localhost:5050/';

export const GET_ALL_CONTENTS = {
    url: 'contents',
    method: 'GET'
};

export const GET_CONTENT_BY_ID = (ContentID) => ({
    url: `content/${ContentID}`,
    method: 'GET'
});

// export const GET_EVENT_BY_ID = (EventID) => ({
//     url: `api/events/${EventID}`,
//     method: 'GET'
// });

// export const UPDATE_EVENT_ON_REGISTRATION = (EventID) => ({
//     url: `api/events/${EventID}`,
//     method: 'PATCH'
// });

// export const UPDATE_EVENT_ON_BOOKMARK = (EventID) => ({
//     url: `api/events/${EventID}`,
//     method: 'PATCH'
// });
