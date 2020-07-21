// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor () {
    this.events = {
      'click': [],
      'hover': [],
    }
  }

  // Register an event handler
  on(eventName, callback) {
    if (!Object.keys(this.events).includes(eventName)) {
      return 'No such event'
    }

    if (this.events[ eventName ]) {
      this.events[ eventName ].push(callback)
    } else {
      this.events[ eventName ] = [ callback ]
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[ eventName ]) {
      for (let callback of this.events[ eventName ]) {
        callback()
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[ eventName ]
  }
}

module.exports = Events
