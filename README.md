Open in Brackets or run `python -m SimpleHTTPServer` and open localhost:8000 in your browser

This custom polymer element (`<control-panel>`) allows you to control another polymer element that tweens using Greensock's TimelineLite or TimelineMax object.  

To use: 

1. Add a `<control-panel>` element inside the template of the tweening element and pass it a `timeline` property. E.g.:
`<control-panel timeline="{{timeline}}"></control-panel>`

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
  this.timeline = new TimelineMax({onUpdateScope: this, onUpdate: this.updateSlider.bind(this), repeat: -1});
  this.timeline.pause();
  this.timeline.add( new TweenLite.to( this.$$('#whale'), 1, {x: '701px'}), 0);
},
```

4. Additionally, an `updateSlider` method must be added to the parent tweening element that notifies the listening `timeline` property of the update.  E.g.: 
 
```
updateSlider: function(){
  var percentComplete = Math.round(100 * (this.timeline.time() / this.timeline.duration()));
  this.notifyPath('timeline.progress', percentComplete);
}
```
  
Control of the Timeline instance is now given to the `<control-panel>` component.

