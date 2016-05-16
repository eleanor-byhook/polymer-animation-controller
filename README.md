#Polymer Tween Controller

This custom polymer element (`<tween-controller>`) allows you to control another polymer element that tweens using Greensock's TimelineLite or TimelineMax object.

###To demo
Open in Brackets or run `python -m SimpleHTTPServer` in the directory above this repo, open localhost:8000 in your browser and select the tween-controller folder.

###To use

1. Add a `<tween-controller>` element inside the template of the tweening element and pass it a `timeline` property. E.g.:
`<tween-controller timeline="{{timeline}}"></tween-controller>`

2. The parent tweening component must also declare the instance of timeline as a property:

  ```
  properties: {
    timeline: {
      type: Object,
      notify: true
   }
  }
  ```

3. Assigning value to the timeline property may happen on `ready`, E.g.:

  ```
  ready: function() {
    this.timeline = new TimelineMax({ repeat: -1});
    this.timeline.pause();
    this.timeline.add( new TweenLite.to( this.$$('#whale'), 1, {x: '701px'}), 0);
  },
  ```


3b. Optionally if you wish to use the repeat delay funtionality, make sure the
   constructor of the timeline includes a `repeat: -1` value, as shown above.
  
Control of the Timeline instance is now given to the `<tween-controller>` component.

