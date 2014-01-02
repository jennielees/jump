Jump
============

Jump is a Chrome extension made purely for myself because I missed having a link shortener around.

Rather than roll a remote shortener, I decided to write a little extension which uses Chrome sync to store a bunch of key: url pairs. Hit the arrow button to add a new link, or go to the page listing all links. Use `ju` as your omnibox shortcut to glory.

Yes, for frequently visited sites this isn't much of an improvement over just typing the first few letters of the site into the omnibox. Where I find this kind of shortcut really handy, though, is for URLs like "New Google Drive document" (or a specific doc), or deep-linking into analytics systems, dashboards, etc -- sites where there are a bunch of potential autocompletes and you can't really tell the difference at a glance.

Install
-------
Available in the Chrome Web Store [here](https://chrome.google.com/webstore/detail/nnmoidfdhdncdeeficmimjfcdbhaaffi), or as the `.crx` file [here](https://github.com/jennielees/jump/blob/master/jump.crx)

Screenshots
-----------

Add new shortcut:

![Screenshot 1](http://i.imgur.com/rOIX7en.png)

View all your links:

![Screenshot 2](http://i.imgur.com/ANm1sVj.jpg)

Use via `ju`:

![Screenshot 3](http://i.imgur.com/WOioNXf.png)

Todo
---

* Autosuggest/Autocomplete
* Rename links
* Check for namespace conflict
* Export to a csv/textfile
* Paginate list page

Feature Suggestions
-----

* Change shortcut command (ergonomics)
* Keyboard shortcut to save new link
* Auto-parse URLs of the form "go/" or other fake host  
