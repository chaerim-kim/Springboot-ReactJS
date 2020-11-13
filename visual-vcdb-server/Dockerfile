ARG BASE_BUILD_IMAGE=11-jdk
FROM openjdk:${BASE_BUILD_IMAGE} as build
ARG DEPENDENCY=/app
ENV BUILD_LOCATION=${DEPENDENCY}
WORKDIR ${DEPENDENCY}
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src
RUN ./mvnw package -DskipTests
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app/target/$ARTIFACT_NAME" ]
FROM build AS test

ENV TEST=1
ENV SPRING_PROFILES_ACTIVE=test

RUN ./mvnw test
ENTRYPOINT ["./mvnw", "test"]