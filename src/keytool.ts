const commonOptions: Fig.Option[] = [
  {
    name: ["-h", "-?", "--help", "-help"],
    description: "Show help message",
  },
  {
    name: "-v",
    description: "Verbose output",
  },
];

const completionSpec: Fig.Spec = {
  name: "keytool",
  description: "Key and Certificate Management Tool",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    {
      name: ["-h", "-?", "--help", "-help"],
      description: "Show help message",
    },
    {
      name: "-conf",
      description: "Specify pre-configured options file",
      args: {
        name: "url",
      },
    },
  ],
  subcommands: [
    {
      name: "-certreq",
      description: "Generates a certificate request",
      options: [
        ...commonOptions,
        {
          name: "-alias",
          description: "Alias name of the entry to process",
          args: {
            name: "alias",
          },
        },
        {
          name: "-sigalg",
          description: "Signature algorithm name",
          args: {
            name: "alg",
          },
        },
        {
          name: "-file",
          description: "Output file name",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "-keypass",
          description: "Key password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-keystore",
          description: "Keystore name",
          args: {
            name: "keystore",
          },
        },
        {
          name: "-dname",
          description: "Distinguished name",
          args: {
            name: "name",
          },
        },
        {
          name: "-ext",
          description: "X.509 extension",
          args: {
            name: "value",
          },
        },
        {
          name: "-storepass",
          description: "Keystore password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-storetype",
          description: "Keystore type",
          args: {
            name: "type",
          },
        },
        {
          name: "-providername",
          description: "Provider name",
          args: {
            name: "name",
          },
        },
        {
          name: "-addprovider",
          description: "Add security provider by name (e.g. SunPKCS11)",
          args: {
            name: "name",
          },
        },
        {
          name: "-providerclass",
          description: "Add security provider by fully-qualified class name",
          args: {
            name: "class",
          },
        },
        {
          name: "-providerarg",
          description: "Configure argument for -addprovider or -providerclass",
          args: {
            name: "arg",
          },
          dependsOn: ["-addprovider", "-providerclass"],
        },
        {
          name: "-providerpath",
          description: "Provider classpath",
          args: {
            name: "list",
          },
        },
        {
          name: "-protected",
          description: "Password through protected mechanism",
        },
      ],
    },
    {
      name: "-changealias",
      description: "Changes an entry's alias",
      options: [
        ...commonOptions,
        {
          name: "-alias",
          description: "Alias name of the entry to process",
          args: {
            name: "alias",
          },
        },
        {
          name: "-destalias",
          description: "Destination alias",
          args: {
            name: "alias",
          },
        },
        {
          name: "-keypass",
          description: "Key password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-keystore",
          description: "Keystore name",
          args: {
            name: "keystore",
          },
        },
        {
          name: "-cacerts",
          description: "Access the cacerts keystore",
        },
        {
          name: "-storepass",
          description: "Keystore password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-storetype",
          description: "Keystore type",
          args: {
            name: "type",
          },
        },
        {
          name: "-providername",
          description: "Provider name",
          args: {
            name: "name",
          },
        },
        {
          name: "-addprovider",
          description: "Add security provider by name (e.g. SunPKCS11)",
          args: {
            name: "name",
          },
        },
        {
          name: "-providerclass",
          description: "Add security provider by fully-qualified class name",
          args: {
            name: "class",
          },
        },
        {
          name: "-providerarg",
          description: "Configure argument for -addprovider or -providerclass",
          args: {
            name: "arg",
          },
          dependsOn: ["-addprovider", "-providerclass"],
        },
        {
          name: "-providerpath",
          description: "Provider classpath",
          args: {
            name: "list",
          },
        },
        {
          name: "-protected",
          description: "Password through protected mechanism",
        },
      ],
    },
    {
      name: "-delete",
      description: "Deletes an entry",
      options: [
        ...commonOptions,
        {
          name: "-alias",
          description: "Alias name of the entry to process",
          args: {
            name: "alias",
          },
        },
        {
          name: "-keystore",
          description: "Keystore name",
          args: {
            name: "keystore",
          },
        },
        {
          name: "-cacerts",
          description: "Access the cacerts keystore",
        },
        {
          name: "-storepass",
          description: "Keystore password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-storetype",
          description: "Keystore type",
          args: {
            name: "type",
          },
        },
        {
          name: "-providername",
          description: "Provider name",
          args: {
            name: "name",
          },
        },
        {
          name: "-addprovider",
          description: "Add security provider by name (e.g. SunPKCS11)",
          args: {
            name: "name",
          },
        },
        {
          name: "-providerclass",
          description: "Add security provider by fully-qualified class name",
          args: {
            name: "class",
          },
        },
        {
          name: "-providerarg",
          description: "Configure argument for -addprovider or -providerclass",
          args: {
            name: "arg",
          },
          dependsOn: ["-addprovider", "-providerclass"],
        },
        {
          name: "-providerpath",
          description: "Provider classpath",
          args: {
            name: "list",
          },
        },
        {
          name: "-protected",
          description: "Password through protected mechanism",
        },
      ],
    },
    {
      name: "-exportcert",
      description: "Exports certificate",
      options: [
        ...commonOptions,
        {
          name: "-rfc",
          description: "Output in RFC style",
        },
        {
          name: "-alias",
          description: "Alias name of the entry to process",
          args: {
            name: "alias",
          },
        },
        {
          name: "-file",
          description: "Output file name",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: "-keystore",
          description: "Keystore name",
          args: {
            name: "keystore",
          },
        },
        {
          name: "-cacerts",
          description: "Access the cacerts keystore",
        },
        {
          name: "-storepass",
          description: "Keystore password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-storetype",
          description: "Keystore type",
          args: {
            name: "type",
          },
        },
        {
          name: "-providername",
          description: "Provider name",
          args: {
            name: "name",
          },
        },
        {
          name: "-addprovider",
          description: "Add security provider by name (e.g. SunPKCS11)",
          args: {
            name: "name",
          },
        },
        {
          name: "-providerclass",
          description: "Add security provider by fully-qualified class name",
          args: {
            name: "class",
          },
        },
        {
          name: "-providerarg",
          description: "Configure argument for -addprovider or -providerclass",
          args: {
            name: "arg",
          },
          dependsOn: ["-addprovider", "-providerclass"],
        },
        {
          name: "-providerpath",
          description: "Provider classpath",
          args: {
            name: "list",
          },
        },
        {
          name: "-protected",
          description: "Password through protected mechanism",
        },
      ],
    },
    {
      name: "-genkeypair",
      description: "Generate a key pair",
      options: [
        ...commonOptions,
        {
          name: "-alias",
          description: "Alias name of the entry to process",
          args: {
            name: "alias",
          },
        },
        {
          name: "-keyalg",
          description: "Key algorithm name",
          args: {
            name: "alg",
          },
        },
        {
          name: "-keysize",
          description: "Key bit size",
          args: {
            name: "size",
          },
        },
        {
          name: "-groupname",
          description: "Group name. For example, an Elliptic Curve name",
          args: {
            name: "name",
          },
        },
        {
          name: "-sigalg",
          description: "Signature algorithm name",
          args: {
            name: "alg",
          },
        },
        {
          name: "-destalias",
          description: "Destination alias",
          args: {
            name: "alias",
          },
        },
        {
          name: "-dname",
          description: "Distinguished name",
          args: {
            name: "name",
          },
        },
        {
          name: "-startdate",
          description: "Certificate validity start date/time",
          args: {
            name: "date",
          },
        },
        {
          name: "-ext",
          description: "X.509 extension name",
          args: {
            name: "value",
          },
        },
        {
          name: "-validity",
          description: "Validity number of days",
          args: {
            name: "days",
          },
        },
        {
          name: "-keypass",
          description: "Key password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-keystore",
          description: "Keystore name",
          args: {
            name: "keystore",
          },
        },
        {
          name: "-storepass",
          description: "Keystore password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-storetype",
          description: "Keystore type",
          args: {
            name: "type",
          },
        },
        {
          name: "-providername",
          description: "Provider name",
          args: {
            name: "name",
          },
        },
        {
          name: "-addprovider",
          description: "Add security provider by name (e.g. SunPKCS11)",
          args: {
            name: "name",
          },
        },
        {
          name: "-providerclass",
          description: "Add security provider by fully-qualified class name",
          args: {
            name: "class",
          },
        },
        {
          name: "-providerarg",
          description: "Configure argument for -addprovider or -providerclass",
          args: {
            name: "arg",
          },
          dependsOn: ["-addprovider", "-providerclass"],
        },
        {
          name: "-providerpath",
          description: "Provider classpath",
          args: {
            name: "list",
          },
        },
        {
          name: "-protected",
          description: "Password through protected mechanism",
        },
      ],
    },
    {
      name: "-genseckey",
      description: "Generates a secret key",
      options: [
        ...commonOptions,
        {
          name: "-alias",
          description: "Alias name of the entry to process",
          args: {
            name: "alias",
          },
        },
        {
          name: "-keypass",
          description: "Key password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-keyalg",
          description: "Key algorithm name",
          args: {
            name: "alg",
          },
        },
        {
          name: "-keysize",
          description: "Key bit size",
          args: {
            name: "size",
          },
        },
        {
          name: "-keystore",
          description: "Keystore name",
          args: {
            name: "keystore",
          },
        },
        {
          name: "-storepass",
          description: "Keystore password",
          args: {
            name: "arg",
          },
        },
        {
          name: "-storetype",
          description: "Keystore type",
          args: {
            name: "type",
          },
        },
        {
          name: "-providername",
          description: "Provider name",
          args: {
            name: "name",
          },
        },
        {
          name: "-addprovider",
          description: "Add security provider by name (e.g. SunPKCS11)",
          args: {
            name: "name",
          },
        },
        {
          name: "-providerclass",
          description: "Add security provider by fully-qualified class name",
          args: {
            name: "class",
          },
        },
        {
          name: "-providerarg",
          description: "Configure argument for -addprovider or -providerclass",
          args: {
            name: "arg",
          },
          dependsOn: ["-addprovider", "-providerclass"],
        },
        {
          name: "-providerpath",
          description: "Provider classpath",
          args: {
            name: "list",
          },
        },
        {
          name: "-protected",
          description: "Password through protected mechanism",
        },
      ],
    },
    {
      name: "-gencert",
      description: "Generates certificate from a certificate request",
      options: [...commonOptions],
    },
    {
      name: "-importcert",
      description: "Imports a certificate or a certificate chain",
      options: [...commonOptions],
    },
    {
      name: "-importpass",
      description: "Imports a password",
      options: [...commonOptions],
    },
    {
      name: "-importkeystore",
      description: "Imports one or all entries from another keystore",
      options: [...commonOptions],
    },
    {
      name: "-keypasswd",
      description: "Changes the key password of an entry",
      options: [...commonOptions],
    },
    {
      name: "-list",
      description: "Lists entries in a keystore",
      options: [...commonOptions],
    },
    {
      name: "-printcert",
      description: "Prints the content of a certificate",
      options: [...commonOptions],
    },
    {
      name: "-printcertreq",
      description: "Prints the content of a certificate request",
      options: [...commonOptions],
    },
    {
      name: "-printcrl",
      description: "Prints the content of a CRL file",
      options: [...commonOptions],
    },
    {
      name: "-storepasswd",
      description: "Changes the store password of a keystore",
      options: [...commonOptions],
    },
  ],
};

export default completionSpec;
