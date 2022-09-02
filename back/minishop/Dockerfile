FROM maven:3-openjdk-11 as build
ENV HOME=/usr/app
RUN mkdir -p $HOME
WORKDIR $HOME
ADD pom.xml $HOME
ADD . $HOME
RUN mvn clean package

FROM openjdk:11
COPY --from=build /usr/app/target/*.jar /app/runner.jar
ENTRYPOINT java -Dspring.profiles.active=prod -jar /app/runner.jar 