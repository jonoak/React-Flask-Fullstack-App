from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

# MySQL connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="password",
    database="your_database"
)

@app.route('/submit', methods=['POST'])
def submit_data():
    data = request.json
    cursor = db.cursor()

    cursor.execute("INSERT INTO your_table (search_query, password, role, file_name) VALUES (%s, %s, %s, %s)",
                   (data['search_query'], data['password'], data['role'], data['file_name']))

    db.commit()
    cursor.close()

    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(debug=True)
