# Random Flashcard wallpaper
> This is a project to help learn Kanji faster by using flashcard attach directly to screen to avoid dispersion
## Quickstart
First make sure [NodeJS](https://nodejs.org/) is installed.
Run this following command to build the Kanji list
```sh
$ node build
```
And open [Wallpaper Engine](http://store.steampowered.com/app/431960/Wallpaper_Engine/) and browse `index.html`
## Note
If you want to create a new Kanji in list, then go to folder `kanji`, then add or remove or modify the word (extension has to be `json`, the template is in `example kanji.json`). After that, rebuild the words list
```sh
$ node build
```
and open `Wallpaper Engine` and change to another theme and change back to `index.html` (this `index.html` is the html file in this project)
## Source
> The original source can be found here: https://codepen.io/reccanti/pen/BjwOev.
> I'd modify some code in that and created Kanji list builder in NodeJS
## Author
tuannhse04791
