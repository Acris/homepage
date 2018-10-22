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
        sh 'rm -rf $ORZ_HOME/* && cp -a $WORKSPACE/dist/. $ORZ_HOME && cp -a $WORKSPACE/assets $ORZ_HOME && cp $WORKSPACE/favicon.ico $ORZ_HOME'
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
    ORZ_HOME = '/usr/share/nginx/html/orz'
  }
  triggers {
    pollSCM('*/5 * * * *')
  }
}
