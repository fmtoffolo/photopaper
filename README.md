photopaper
==========

Just a simple mobile photo viewer controlled via the device orientation.

You tilt it 20 degrees left or right and it will trigger a panning motion to view the rest of the picture.

Use it:

Create a new instance of PhotoPaper

var photo = new PhotoPaper();

The constructor is expecting a object. You can pass:
imageUrl: expects an url
captionText: expects a string
profilePic: expects an url

If they are missing they default to some assets included in the repository.


You can try out a demo here
http://fmtoffolo.github.io/photopaper
