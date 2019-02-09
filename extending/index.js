new Vue({
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