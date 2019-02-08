/* =====================
# Lab 2, Part 1 — Underscore Selection

## Introduction

Set variables "query1" through "query8" by using an underscore function to answer the specified question. When you are finished, check your browser's console log to test the results.

For data, use the following two lists of board game collections.
===================== */

var rossGameList = ["catan", "hanabi", "code names", "chess", "candyland"];
console.log('ross\'s list', rossGameList);

var nathanGameList = ["chess", "dice", "catan", "pandemic"];
console.log('Nathan\'s list', nathanGameList);

/* =====================
What is the first game in Ross's list?
===================== */

var query1 = rossGameList[0];

console.log('What is the first game in Ross\'s list?', query1);


/* =====================
What are all of the games except for the first game in ross's list?
===================== */

var query2 = rossGameList.slice(1);

console.log('What are all of the games except for the first game in Ross\'s list?', query2);

/* =====================
What is the last game in Nathan's list?
===================== */

var query3 = nathanGameList.slice(-1);

console.log('What is the last game in Nathan\'s list?', query3);

/* =====================
What are all of the games in Nathan's list except for the last?
===================== */

var query4 = nathanGameList.slice(0,-1);

console.log('What are all of the games in Nathan\'s list except for the last?', query4);

/* =====================
What would Nathan's game list look like if he sold "catan"?
===================== */

var query5 = remover();

function remover () {
  lst = []
  for (var i = 0; i = nathanGameList.length; i = i + 1) {
    if (nathanGameList[i] != "catan") {
      lst = lst + nathanGameList[i]
    }
  }
  return lst;
};

console.log('What would Nathan\'s game list look like if he sold "catan"?', query5);

/* =====================
If Nathan and Ross play a board game, what are their options? This should be a list of all games owned by ross or Nathan, with no duplicates.
===================== */

var query6 = rossGameList.concat(nathanGameList);

console.log('If Nathan and Ross play a board game, what are their options? This should be a list of all games owned by ross or Nathan, with no duplicates.', query6);

/* =====================
Which games are owned by both Ross and Nathan?
===================== */

var query7;
/*
function common () {
  arr = rossGameList;
  new_arr = [];
  for (i = 0; i < arr.length; i = i + 1) {
    if (arr[i] ==)
  }

};

console.log('Which games are owned by both Ross and Nathan', query7);

/* =====================
Which games are exclusive to collections? In other words, only owned by either Ross or Nathan.
===================== */

var query8;

console.log('Which games are exclusive to one collection? In other words, only owned by either Ross or Nathan (but not both!).', query8);
