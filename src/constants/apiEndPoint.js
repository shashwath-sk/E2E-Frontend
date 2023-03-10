export const BACKEND_URL = 'http://localhost:5050/';

export const GET_ALL_CONTENTS = {
    url: 'contents',
    method: 'GET'
};

export const GET_CONTENT_BY_ID = (ContentID) => ({
    url: `content/${ContentID}`,
    method: 'GET'
});

export const GET_CONTENT_ENTRIES = (ContentID) => ({
    url: `content/${ContentID}/entries`,
    method: 'GET'
});
export const UPDATE_CONTENT_NAME = (ContentID) => ({
    url: `contents/${ContentID}`,
    method: 'PUT'
});
export const ADD_CONTENT = {
    url: 'content',
    method: 'POST'
};

export const ADD_NEW_FIELD = (ContentID) => ({
    url: `content/${ContentID}`,
    method: 'POST'
});

export const UPDATE_FIELD = (ContentID) => ({
    url: `content/${ContentID}`,
    method: 'PUT'
});

export const DELETE_FIELD = (ContentID) => ({
    url: `contents/${ContentID}`,
    method: 'DELETE'
});
