FROM python:3.5
MAINTAINER castellanprime
RUN mkdir /mainweb
COPY . /mainweb
WORKDIR /mainweb
RUN pip install -r requirements.txt
EXPOSE 5000
CMD ["python3", "/mainweb/app.py"]
