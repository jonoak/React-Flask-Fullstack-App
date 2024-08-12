# React-Flask App

![screenshot](/screenshot.png)

This project is a full-stack web application built using the following technologies:

- **Front-End**: HTML, CSS, JavaScript, React
- **Back-End**: Python, Flask, SQL (MySQL)
- **Data Visualization**: D3.js, Plotly

## Project Structure

- `frontend/`: Contains the React front-end code.
  - `App.js`: Main React component containing the UI.
  - `App.css`: CSS file for styling the React components.
  - `D3Chart.js`: A React component to display a simple bar chart using D3.js.
  - `PlotlyChart.js`: A React component to display a simple scatter plot using Plotly.

- `backend/`: Contains the Flask back-end code.
  - `app.py`: Flask server file that handles API requests and interacts with MySQL.

- `README.md`: Documentation for setting up and running the project.

## Setup Instructions

### Front-End Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

### Back-End Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install the required Python packages:
   ```bash
   pip install Flask mysql-connector-python
   ```

3. Update MySQL connection details in `app.py`:
   ```python
   db = mysql.connector.connect(
       host="localhost",
       user="your_mysql_user",
       password="your_mysql_password",
       database="your_database_name"
   )
   ```

4. Run the Flask server:
   ```bash
   python app.py
   ```

## Data Visualization

The project includes two data visualization examples:

- **D3.js**: Located in `D3Chart.js`, this component shows a simple bar chart.
- **Plotly.js**: Located in `PlotlyChart.js`, this component shows a scatter plot.

Both components can be integrated into the main `App.js` file or used independently.

## License

This project is licensed under the MIT License.
