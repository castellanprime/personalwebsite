from flask import Flask, render_template

app=Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/home/')
def home():
	return render_template('home.html')

@app.route('/skills/')
def skills():
	return render_template('skills.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__=="__main__":
	app.run(host="0.0.0.0", port=5000)
