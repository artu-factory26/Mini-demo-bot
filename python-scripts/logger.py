import datetime

class Logger:
    def __init__(self):
        self.logs = []

    def add_log(self, message):
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        self.logs.append(f"[{timestamp}] {message}")
        print(self.logs[-1])

logger = Logger()
logger.add_log("Usuario X subió de nivel")
logger.add_log("Ticket #123 abierto")