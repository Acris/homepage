pipeline {
  agent {
    docker {
      image 'node:lts-alpine' 
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'yarn add gulp-cli && yarn && yarn run gulp'
        echo 'Build success!'
      }
    }
    stage('Deploy') {
      steps {
        sh 'rm -rf $ORZ_HOME/* && cp -a $WORKSPACE/dist/. $ORZ_HOME && cp $WORKSPACE/favicon.ico $ORZ_HOME'
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
    ORZ_HOME = '/srv/orz'
  }
  triggers {
    pollSCM('*/5 * * * *')
  }
}
