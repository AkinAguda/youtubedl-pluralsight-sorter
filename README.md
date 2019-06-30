# youtubedl-pluralsight-sorter

This is a javascript file that runs in node to help numerically sort pluralsight videos downloaded with youtube-dl in a certain module

check [Here](https://gist.github.com/jesperorb/c14aef85735c54f479896cfa6f16a1e5) for a walkthrough on downloading PluralSight Tutorials using [Youtube-dl](https://github.com/ytdl-org/youtube-dl).

# How to use script

This assumes you have at least v6.17.1 of [Nodejs](https://nodejs.org/en/).
WORKS ON LINUX, MAC AND WINDOWS.
Simply Place the script in the same directory as your downloaded videos and open your terminal window there.

type `node script` and your folders will be sorted.

**DEPENDING ON HOW OLD THE TUTORIAL IS THAT YOU ARE DOWNLOADING, THE FILES MIGHT NOT BE SORTED INTO FOLDERS. NEWER TUTORIALS WILL JUST BE NUMBERED IN ASCENDING ORDER.**

If its an older tutorial, each folder will be named like **m1** or **m2** and so on. Each folder contains the video files arranged in ascending order.
