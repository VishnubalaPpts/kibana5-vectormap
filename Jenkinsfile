node('nodejs') {
  /*
  stage('Test') {
    No tests currently available
  }
  */
  if (env.BRANCH_NAME == "dev" || env.BRANCH_NAME == "master") {
    stage('Publish') {
      deleteDir()
      checkout scm
      withCredentials([file(credentialsId: 'nexus-npmrc', variable: 'NEXUS_NPMRC')]) {
        sh "ln -s ${NEXUS_NPMRC} .npmrc"
        sh 'npm publish'
      }
    }
  }
}
