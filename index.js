new Vue({
  // el = element   #activates id in html
	el: '#app',
  data: {
  	title: 'Hello World!'
  },
  methods: {
    changeTitle: function(event) {
      // this proxies all properties of title
      
      this.title = event.target.value;
    }
  }
});