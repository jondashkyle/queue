# queue
list of links updated by a hosted text file. i put my text file in the public directory of my dropbox.

## setup
- adjust the source of the text db in `app.js`
- that’s set in the init subscription of the model
- `npm run start` runs an local preview
- `npm run build` builds the js

## formatting
the text db should have this structure.

```
# heading

link title
http://linkurl.com

another title
http://google.com

# another heading

you get the idea
http://thatsit.com
```