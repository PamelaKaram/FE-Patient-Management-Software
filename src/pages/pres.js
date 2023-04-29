
export async function getServerSideProps(context) {
    const session = await getSession(context);
    const { uuid } = context.query;
  
    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  
    if (session.user.role !== "doctor") {
      const role = session.user.role;
      const uuid = session.user.uuid;
      return {
        redirect: {
          destination: `/${role}/${uuid}`,
          permanent: false,
        },
      };
    }
  
    const data = await axios.get("info/doctor", {
      params: {
        doctorUUID: uuid,
      },
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    });
  
    return {
      props: {
        data: data.data.data,
      },
    };
  }