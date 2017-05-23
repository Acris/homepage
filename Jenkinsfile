pipeline {
  agent any
  stages {
    stage('Initialize') {
      steps {
        echo 'Initialize success!'
      }
    }
    stage('Build') {
      steps {
        sh 'yarn add gulp-cli && yarn && yarn run gulp'
        echo 'Build success!'
      }
    }
    stage('Deploy') {
      steps {
        sh 'rm -rf $REORZ_HOME/* && cp -a $WORKSPACE/dist/. $REORZ_HOME'
        echo 'Deploy success!'
      }
    }
    stage('Clean') {
      steps {
        deleteDir()
        echo 'Clean success!'
      }
    }
  }
  environment {
    REORZ_HOME = '/usr/share/nginx/html/reorz'
  }
  triggers {
    pollSCM('H 3 * * *')
  }
}