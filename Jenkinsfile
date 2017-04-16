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
        sh 'rm -rf $MRX_HOME/* && cp -a $WORKSPACE/dist/. $MRX_HOME'
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
    MRX_HOME = '/usr/share/nginx/html/mrx'
  }
}